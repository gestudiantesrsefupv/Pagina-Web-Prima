'use client';

import { useState } from 'react';
import Image from 'next/image';

// ---------------------
//  Placeholder posts
// ---------------------
const PLACEHOLDER_POSTS = [
    {
        id: 1,
        tag: 'Entrevista',
        date: '7 mar 2026',
        author: 'Delegación UPV',
        title: 'Entrevista a Juan Calderón Bustillo – Investigador en Ondas Gravitacionales. Parte I',
        excerpt:
            '¿Cuáles son las diferencias entre trabajar en empresa y en investigación? ¿Cómo puede un investigador en ondas gravitacionales trabajar en el FC Barcelona?',
        readTime: '10 min',
        url: 'https://estudiantes.rsef.es/blog/2026/03/07/Entrevista-Juan-I/',
        image: '/images/blog/asistencia.jpg',
    },
    {
        id: 2,
        tag: 'Eventos',
        date: '28 feb 2026',
        author: 'Delegación UPV',
        title: 'GdeE por el mundo: Sonsoles y Àlex en el ALM 2026 en Washington D.C.',
        excerpt:
            'A principios de febrero la vicepresidenta del Grupo de Estudiantes, Sonsoles Riscos Martínez, y el internacionalista (RR.II.), aquí un servidor, fuimos invitados...',
        readTime: '8 min',
        url: 'https://estudiantes.rsef.es/blog/2026/02/28/ALM_Guitart/',
        image: '/images/blog/confianza.jpg',
    },
    {
        id: 3,
        tag: 'Divulgación',
        date: '12 mar 2026',
        author: 'Pau Pastor',
        title: 'Esto es un post de prueba',
        excerpt:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat finibus. Nullam nec metus vel ante feugiat finibus.',
        readTime: '8 min',
        url: 'https://estudiantes.rsef.es/blog/2026/03/07/Entrevista-Juan-I/',
        image: '/images/blog/herramientas.jpg',
    },
    {
        id: 4,
        tag: 'Entrevista',
        date: '15 ene 2026',
        author: 'Delegación UPV',
        title: 'Entrevista a Anxo Fariña Biasi – Investigador en Física Matemática. Parte III',
        excerpt:
            '¿Qué es exactamente lo que investiga un físico matemático? ¿Cómo lo hace y qué herramientas utiliza? ¿Cómo se pueden estudiar los agujeros negros con física...',
        readTime: '12 min',
        url: 'https://estudiantes.rsef.es/blog/2026/01/15/Entrevista-Anxo-III/',
        image: '/images/blog/ejemplo.jpeg',
    },
];

const TAG_COLORS = {
    Entrevista: 'bg-blue-100 text-blue-700',
    Eventos: 'bg-emerald-100 text-emerald-700',
    Divulgación: 'bg-purple-100 text-purple-700',
    Recursos: 'bg-orange-100 text-orange-700',
};

// ---------------------
//  Post card component
// ---------------------
function PlaceholderPostCard({ post }) {
    return (
        <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col h-full rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
        >
            {post.image && (
                <div className="w-full h-48 sm:h-56 relative overflow-hidden bg-gray-100 border-b border-gray-100 shrink-0">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                </div>
            )}
            <div className="flex flex-col flex-grow p-6">
                <div className="mb-4">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className={`rounded-full px-3 py-1 text-xs font-bold ${TAG_COLORS[post.tag] ?? 'bg-gray-100 text-gray-600'}`}>
                            {post.tag}
                        </span>
                        <span className="text-sm font-medium text-gray-400">{post.date}</span>
                        <span className="text-sm text-gray-400">· {post.readTime} lectura</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-gray-500">Por {post.author}</p>
                </div>
                <h3 className="text-xl font-bold leading-snug text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                </h3>
                <p className="flex-grow text-gray-600 leading-relaxed line-clamp-3 text-sm">
                    {post.excerpt}
                </p>
                <div className="mt-5 w-full rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg text-center">
                    Leer en estudiantes.rsef.es
                </div>
            </div>
        </a>
    );
}

// ---------------------
//  Main page
// ---------------------
export default function BlogPage() {
    const [showInternal, setShowInternal] = useState(false);

    return (
        <div className="container mx-auto pb-20">
            {/* Hero */}
            <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
                <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl drop-shadow-lg">
                    Blog
                </h1>
                <p className="max-w-2xl mt-6 text-xl text-white/90 font-light leading-relaxed drop-shadow-md">
                    Artículos, crónicas y recursos de física para la comunidad estudiantil.
                </p>
            </div>

            {/* Card 1: RSEF Blog */}
            <div className="mx-4 rounded-[2.5rem] bg-gradient-to-br from-blue-400 to-indigo-700 p-8 lg:p-16 shadow-2xl mb-12 text-white relative overflow-hidden">
                <div
                    className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                />
                <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                    <div className="max-w-2xl">
                        <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold mb-4">
                            Blog nacional · estudiantes.rsef.es
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Blog del GdeE</h2>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Accede al blog oficial del Grupo de Estudiantes de la RSEF, donde estudiantes de toda España publican artículos de divulgación, opinión y ciencia.
                        </p>
                    </div>
                    <a
                        href="https://estudiantes.rsef.es/blog/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-700 shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Ir al blog
                    </a>
                </div>
            </div>

            {/* Card 2: Internal blog */}
            <div className="mx-4 rounded-[2.5rem] bg-white p-8 lg:p-16 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.04] font-bold text-[10rem] leading-none text-gray-900 select-none pointer-events-none">
                    Blog
                </div>
                <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
                        <div>
                            <span className="inline-block rounded-full bg-emerald-100 text-emerald-700 px-4 py-1 text-sm font-semibold mb-3">
                                En el blog nacional · GdeE
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Nuestras publicaciones</h2>
                            <p className="mt-3 text-lg text-gray-600 max-w-xl">
                                Artículos escritos por miembros de la Delegación y publicados en el Blog Nacional del GdeE.
                            </p>
                        </div>
                        <button
                            onClick={() => setShowInternal(!showInternal)}
                            className="shrink-0 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                        >
                            {showInternal ? (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                    </svg>
                                    Ocultar artículos
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    Ver artículos
                                </>
                            )}
                        </button>
                    </div>

                    {showInternal && (
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-start mt-4">
                            {PLACEHOLDER_POSTS.map((post) => (
                                <PlaceholderPostCard key={post.id} post={post} />
                            ))}
                        </div>
                    )}

                    {!showInternal && (
                        <div className="flex flex-col items-center justify-center py-10 text-gray-400 gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 4v6h6M9 12h6M9 16h4" />
                            </svg>
                            <p className="text-base font-medium">Pulsa «Ver artículos» para explorar el blog</p>
                        </div>
                    )}
                </div>

                {/* Demon Image - Absolute Positioned in Corner */}
                <div className="absolute -bottom-9 -right-9 hidden md:block">
                    <Image
                        src="/images/demonio/demonio1.png"
                        alt="Demonio blog"
                        width={256}
                        height={256}
                        className="h-64 w-auto object-contain drop-shadow-2xl opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}
