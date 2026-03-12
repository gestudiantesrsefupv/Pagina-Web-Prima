'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ActivityCard({ activity }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % activity.images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + activity.images.length) % activity.images.length);
    };

    return (
        <>
            {/* Tarjeta Pequeña (Vista Previa) */}
            <div
                onClick={() => setIsOpen(true)}
                className="group flex flex-col h-[450px] rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden cursor-pointer"
            >
                {/* Imagen de portada (Primera imagen) */}
                <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
                    <Image
                        src={activity.images[0]}
                        alt={activity.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                <div className="flex flex-col flex-grow p-6 overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                    <div className="mb-4 flex-shrink-0">
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">
                            {activity.date}
                        </span>
                        <h2 className="text-xl font-bold text-gray-900 mt-2">
                            {activity.title}
                        </h2>
                    </div>
                    <div className="flex-grow">
                        <p className="text-gray-600 text-sm mb-4">
                            {activity.excerpt}
                        </p>
                    </div>
                    <div className="mt-auto pt-2 flex-shrink-0">
                        <span className="text-sm font-semibold text-emerald-600 group-hover:underline">
                            Ver detalles &rarr;
                        </span>
                    </div>
                </div>
            </div>

            {/* Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Fondo Borroso */}
                    <div
                        className="absolute inset-0 bg-black/30 backdrop-blur-md transition-opacity duration-300"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Contenedor del Modal */}
                    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col" style={{ scrollbarWidth: 'thin' }}>

                        {/* Botón Cerrar */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute right-4 top-4 z-20 rounded-full bg-white/80 p-2 text-gray-500 hover:bg-white hover:text-gray-900 transition-colors backdrop-blur-sm shadow-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Galería de Imágenes */}
                        <div className="relative h-64 sm:h-96 w-full flex-shrink-0 bg-gray-100 group">
                            <Image
                                src={activity.images[currentImageIndex]}
                                alt={`${activity.title} - Imagen ${currentImageIndex + 1}`}
                                fill
                                className="object-contain"
                                sizes="(max-width: 1024px) 100vw, 800px"
                            />

                            {/* Flechas de Navegación (Solo si hay más de una imagen) */}
                            {activity.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-gray-800 hover:bg-white shadow-md transition-all opacity-0 group-hover:opacity-100"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-gray-800 hover:bg-white shadow-md transition-all opacity-0 group-hover:opacity-100"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>

                                    {/* Indicadores (Puntos) */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {activity.images.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`h-2 w-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Contenido */}
                        <div className="p-8 sm:p-10 flex-grow">
                            <div className="mb-6">
                                <span className="text-sm font-bold text-emerald-600 uppercase tracking-wide">
                                    {activity.date}
                                </span>
                                <h2 className="text-3xl font-bold text-gray-900 mt-2">
                                    {activity.title}
                                </h2>
                            </div>

                            <div
                                className="prose prose-blue max-w-none text-gray-600 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: activity.description }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
