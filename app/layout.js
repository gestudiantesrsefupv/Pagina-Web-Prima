'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import "./globals.css";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const pathname = usePathname();
    const [scrollY, setScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const rafRef = useRef(null);

    const handleScroll = useCallback(() => {
        if (rafRef.current) return;
        rafRef.current = requestAnimationFrame(() => {
            setScrollY(window.scrollY);
            rafRef.current = null;
        });
    }, []);

    useEffect(() => {
        // Set initial value
        setScrollY(window.scrollY);

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [handleScroll]);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Configuración de la animación
    const maxScroll = 400; // Scroll "profundo" para completar la animación
    const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1); // Valor entre 0 y 1

    // Interpolación de estilos
    // El espaciador central se reduce de 40vw a 1rem (aprox 16px) para evitar desbordamiento
    const spacerWidth = Math.max(1, 40 * (1 - progress));

    // Opacidad: Los hijos pierden fondo blanco, el padre lo gana
    const parentBgOpacity = progress * 0.95; // Hasta 95% opacidad
    const childBgOpacity = Math.max(0, 1 - (progress * 1.5)); // Desaparece más rápido

    // Sombra: Transición de hijos a padre
    const parentShadow = progress > 0.5 ? '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' : 'none';
    const childShadow = progress < 0.5 ? '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' : 'none';

    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Blog", href: "/blog" },
        { name: "Actividades", href: "/actividades" },
        { name: "Miembros", href: "/sobre-nosotros" },
        { name: "Contáctanos", href: "/contactanos" },
    ];

    return (
        <html lang="es">
            <body className={`${inter.className} min-h-screen w-full bg-gradient-to-br from-emerald-400 to-blue-600 text-white`}>

                {/* Header Dinámico Progresivo */}
                <header className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                    <div
                        className="flex items-center relative transition-all duration-75 ease-out pointer-events-auto"
                        style={{
                            backgroundColor: `rgba(255, 255, 255, ${parentBgOpacity})`,
                            backdropFilter: `blur(${progress * 12}px)`,
                            boxShadow: parentShadow,
                            borderRadius: '9999px',
                            padding: `${progress * 0.75}rem ${progress * 1.5}rem`, // Padding crece al unirse
                        }}
                    >

                        {/* Isla Izquierda: Logo */}
                        <div
                            className="flex items-center px-6 py-3 rounded-full transition-all duration-75"
                            style={{
                                backgroundColor: `rgba(255, 255, 255, ${childBgOpacity})`,
                                boxShadow: childShadow,
                            }}
                        >
                            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                                <Image
                                    src="/images/logo.png"
                                    alt="Logo"
                                    width={135}
                                    height={32}
                                    className="h-8 w-auto object-contain"
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Espaciador Dinámico */}
                        <div style={{ width: `${spacerWidth}vw`, height: '1px' }} />

                        {/* Isla Derecha: Menú de Navegación (desktop only) */}
                        <nav
                            className="hidden sm:flex items-center gap-1 sm:gap-2 text-sm font-medium text-gray-800 px-6 py-3 rounded-full transition-all duration-75"
                            style={{
                                backgroundColor: `rgba(255, 255, 255, ${childBgOpacity})`,
                                boxShadow: childShadow,
                            }}
                        >
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`px-3 py-2 rounded-full transition-all duration-300 ${isActive
                                            ? 'bg-blue-100 text-blue-700 font-bold'
                                            : 'hover:bg-gray-100 hover:text-blue-600'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Mobile menu button (mobile only) */}
                        <div className="sm:hidden ml-2">
                            <button
                                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                                aria-expanded={mobileMenuOpen}
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 rounded-full bg-white bg-opacity-90 shadow-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {mobileMenuOpen ? (
                                    // Close icon
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    // Hamburger icon
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Mobile dropdown (shows when open) */}
                        {mobileMenuOpen && (
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-full px-4 sm:hidden">
                                <div className="rounded-3xl bg-white p-4 shadow-lg text-gray-800">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="block px-4 py-2 rounded-md hover:bg-gray-100"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </header>

                {/* Contenido Principal */}
                <main className="min-h-screen pt-32 px-4">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
