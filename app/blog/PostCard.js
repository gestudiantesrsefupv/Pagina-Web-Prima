'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PostCard({ post }) {
    const [isOpen, setIsOpen] = useState(false);

    // Bloquear scroll cuando el modal está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Tarjeta Pequeña (Vista Previa) */}
            <div className="flex flex-col h-full rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
                {/* Imagen de portada */}
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                <div className="flex flex-col flex-grow p-8">
                    <div className="mb-6">
                        <div className="mb-3">
                            <div className="flex items-center gap-2">
                                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-600">
                                    Blog
                                </span>
                                <span className="text-sm font-medium text-gray-400">
                                    {post.date}
                                </span>
                            </div>
                            <p className="mt-1 text-sm font-medium text-gray-500">
                                Por {post.author}
                            </p>
                        </div>
                        <h2 className="text-2xl font-bold leading-tight text-gray-900 line-clamp-2">
                            {post.title}
                        </h2>
                    </div>

                    <div className="flex-grow">
                        <p className="text-gray-600 leading-relaxed line-clamp-3">
                            {post.excerpt}
                        </p>
                    </div>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Leer artículo completo
                    </button>
                </div>
            </div>

            {/* Modal Overlay (Efecto Superposición) */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Fondo Borroso */}
                    <div
                        className="absolute inset-0 bg-black/30 backdrop-blur-md transition-opacity duration-300"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Contenedor del Artículo (Modal) */}
                    <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl animate-in zoom-in-95 duration-300">

                        {/* Botón Cerrar Flotante */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-gray-500 hover:bg-white hover:text-gray-900 transition-colors backdrop-blur-sm shadow-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Imagen Principal del Modal */}
                        <div className="relative h-64 sm:h-80 w-full bg-gray-100">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-contain"
                                sizes="(max-width: 1024px) 100vw, 800px"
                            />
                        </div>

                        {/* Contenido del Artículo */}
                        <div className="p-8 sm:p-12">
                            <div className="mb-8 border-b border-gray-100 pb-8">
                                <div className="mb-4">
                                    <div className="flex items-center gap-3">
                                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-600">
                                            Blog
                                        </span>
                                        <span className="text-sm font-medium text-gray-500">
                                            {post.date}
                                        </span>
                                    </div>
                                    <p className="mt-2 text-base font-medium text-gray-600">
                                        Escrito por <span className="text-gray-900">{post.author}</span>
                                    </p>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                                    {post.title}
                                </h2>
                            </div>

                            <div
                                className="prose prose-lg prose-blue max-w-none text-gray-600 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
