'use client';

import { useState } from 'react';
import Image from 'next/image';

// ---------------------
//  Placeholder posts
// ---------------------
const PLACEHOLDER_POSTS = [
    {
        id: 1,
        tag: 'Física',
        date: '10 mar 2025',
        author: 'Equipo GdeE UPV',
        title: 'Introducción a la mecánica cuántica para estudiantes',
        excerpt:
            'Exploramos los fundamentos del mundo cuántico: superposición, entrelazamiento y el principio de incertidumbre de Heisenberg explicados de forma accesible.',
        readTime: '5 min',
        content: `
            <p>La mecánica cuántica es una de las teorías más exitosas de la física moderna. A pesar de su fama de ser contraintuitiva, sus predicciones han sido verificadas con una precisión sin precedentes.</p>
            <h3>¿Por qué cuántica?</h3>
            <p>El término "cuántico" proviene del latín <em>quantum</em> (cantidad). Describe la granularidad fundamental de la naturaleza: la energía no varía de forma continua, sino en paquetes discretos llamados cuantos.</p>
            <p>En los próximos artículos exploraremos la ecuación de Schrödinger, la función de onda y sus implicaciones filosóficas.</p>
        `,
    },
    {
        id: 2,
        tag: 'Eventos',
        date: '24 feb 2025',
        author: 'Comité Organizador',
        title: 'Crónica del Seminario de Astrofísica UPV 2025',
        excerpt:
            'Resumen de las ponencias y talleres del seminario anual de astrofísica celebrado en la Escuela de Ingeniería Aeroespacial de la UPV.',
        readTime: '4 min',
        content: `
            <p>El pasado 20 de febrero celebramos la quinta edición del Seminario de Astrofísica UPV con la participación de más de 150 estudiantes y 8 ponentes invitados.</p>
            <h3>Destacados</h3>
            <p>Las sesiones abarcaron desde la detección de ondas gravitacionales, con la colaboración de un investigador del LIGO, hasta un taller práctico de procesado de imágenes del telescopio James Webb.</p>
        `,
    },
    {
        id: 3,
        tag: 'Divulgación',
        date: '15 ene 2025',
        author: 'Equipo GdeE UPV',
        title: 'El año de la física: hitos científicos de 2024',
        excerpt:
            'Repasamos los descubrimientos más importantes del año pasado: desde nuevos materiales superconductores hasta avances en computación cuántica.',
        readTime: '6 min',
        content: `
            <p>El año 2024 ha sido prolífico para la física. Destacan los avances en superconductividad a temperatura ambiente y los primeros prototipos de procesadores cuánticos con corrección de errores integrada.</p>
            <p>Además, el Nobel de Física fue otorgado por contribuciones al aprendizaje automático con redes neuronales artificiales, subrayando la transversalidad de la física.</p>
        `,
    },
    {
        id: 4,
        tag: 'Recursos',
        date: '5 ene 2025',
        author: 'Equipo GdeE UPV',
        title: 'Guía de recursos para preparar las Olimpiadas de Física',
        excerpt:
            'Recopilamos libros, problemas resueltos y consejos de exalumnos para ayudarte a preparar las fases local y nacional de las Olimpiadas de Física.',
        readTime: '3 min',
        content: `
            <p>Cada año recibimos muchas preguntas sobre cómo prepararse para las Olimpiadas de Física.</p>
            <h3>Libros recomendados</h3>
            <ul>
                <li>Irodov – <em>Problems in General Physics</em></li>
                <li>Halliday, Resnick &amp; Krane – <em>Physics</em></li>
                <li>Purcell – <em>Electricity and Magnetism</em></li>
            </ul>
        `,
    },
];

const TAG_COLORS = {
    Física: 'bg-blue-100 text-blue-700',
    Eventos: 'bg-emerald-100 text-emerald-700',
    Divulgación: 'bg-purple-100 text-purple-700',
    Recursos: 'bg-orange-100 text-orange-700',
};

// ---------------------
//  Post card component
// ---------------------
function PlaceholderPostCard({ post }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col h-full rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
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
                    <button
                        onClick={() => setIsOpen(true)}
                        className="mt-5 w-full rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Leer artículo completo
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <div
                        className="absolute inset-0 bg-black/30 backdrop-blur-md"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-gray-500 hover:bg-white hover:text-gray-900 transition-colors backdrop-blur-sm shadow-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="p-8 sm:p-12">
                            <div className="mb-8 border-b border-gray-100 pb-8">
                                <div className="flex items-center gap-3 flex-wrap mb-2">
                                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${TAG_COLORS[post.tag] ?? 'bg-gray-100 text-gray-600'}`}>
                                        {post.tag}
                                    </span>
                                    <span className="text-sm font-medium text-gray-500">{post.date}</span>
                                    <span className="text-sm text-gray-400">· {post.readTime} lectura</span>
                                </div>
                                <p className="text-base font-medium text-gray-600">
                                    Escrito por <span className="text-gray-900">{post.author}</span>
                                </p>
                                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
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
                                Blog de la delegación · UPV
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Nuestro blog</h2>
                            <p className="mt-3 text-lg text-gray-600 max-w-xl">
                                Artículos escritos por los miembros de la Delegación de Estudiantes de Física de la UPV.
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
