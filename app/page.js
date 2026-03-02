'use client';

import { futureActivities } from "@/lib/activities";

export default function Home() {
    return (
        <div className="container mx-auto pb-20">
            {/* Hero Section */}
            <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
                <h1 className="max-w-6xl text-6xl font-bold tracking-tight text-white md:text-8xl lg:text-9xl leading-tight drop-shadow-lg">
                    La física, <br />
                    más allá del aula
                </h1>
                <p className="max-w-3xl text-xl md:text-2xl text-white/90 font-light leading-relaxed drop-shadow-md">
                    Somos el punto de encuentro para los apasionados de la física en la UPV. Divulgación, ciencia y comunidad.
                </p>
            </div>

            {/* Isla Principal de Información */}
            <div className="mx-4 rounded-[2.5rem] bg-white p-8 shadow-2xl lg:p-16 mb-12">
                <div className="flex flex-col gap-24">

                    {/* Card 1: RSEF (Texto Izquierda, Imagen Derecha) */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 text-left">
                            <div className="h-2 w-20 bg-emerald-400 rounded-full mb-6"></div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">¿Qué es la RSEF?</h2>
                            <p className="text-gray-600 leading-relaxed text-xl">
                                La Real Sociedad Española de Física es una institución histórica dedicada a promover y divulgar la física en España. Fundada en 1903, conecta a investigadores, docentes y estudiantes para fomentar el avance científico.
                            </p>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-3xl shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
                                <img
                                    src="/images/home/logo_RSEF.jpg"
                                    alt="RSEF Física"
                                    className="h-full w-full object-contain bg-white"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 2: GdeE (Imagen Izquierda, Texto Derecha) */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 w-full order-2 md:order-1">
                            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-3xl shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
                                <img
                                    src="/images/home/ENEF25.jpeg"
                                    alt="Grupo de Estudiantes"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1 text-right order-1 md:order-2 flex flex-col items-end">
                            <div className="h-2 w-20 bg-teal-500 rounded-full mb-6"></div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">El GdeE</h2>
                            <p className="text-gray-600 leading-relaxed text-xl">
                                El Grupo de Estudiantes (GdeE) es la sección joven de la RSEF. Nuestra misión es crear una red nacional de futuros físicos, facilitando el intercambio de ideas, oportunidades laborales y la defensa de nuestros intereses académicos.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Delegación Local (Texto Izquierda, Imagen Derecha) */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 text-left">
                            <div className="h-2 w-20 bg-blue-600 rounded-full mb-6"></div>
                            <div className="mb-6">
                                <div className="flex items-center gap-4">
                                    <h2 className="text-4xl font-bold text-gray-900">Tu Delegación Local</h2>
                                    <img
                                        src="/images/home/d.maxwell_01.png"
                                        alt="Mascota Maxwell"
                                        className="h-32 w-auto object-contain animate-bounce"
                                    />
                                </div>
                                <p className="text-sm font-bold text-blue-600 tracking-wider mt-2">Nosotros: GdeE-UPV</p>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-xl">
                                Somos la delegación local en la Universitat Politècnica de València. Formada principalmente por estudiantes de Ingeniería Física, organizamos charlas, visitas y eventos sociales para complementar nuestra formación técnica.
                            </p>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-3xl shadow-lg transform transition-transform hover:scale-[1.02] duration-500">
                                <img
                                    src="/images/home/DELE.jpg"
                                    alt="Delegación UPV"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Isla: Último Post del Blog */}
            <div className="mx-4 rounded-[2.5rem] bg-white p-8 shadow-2xl lg:p-12 mb-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Último en nuestro Blog</h2>
                    <a
                        href="/blog"
                        className="rounded-full bg-gray-100 px-6 py-3 text-sm font-bold text-gray-900 transition-all hover:bg-blue-100 hover:text-blue-700"
                    >
                        Ver todos los artículos &rarr;
                    </a>
                </div>

                {/* Preview del Post */}
                <div className="group relative overflow-hidden rounded-3xl bg-gray-50 transition-all hover:shadow-lg">
                    <div className="flex flex-col md:flex-row">
                        <div className="h-64 md:h-auto md:w-1/3 overflow-hidden">
                            <img
                                src="/images/blog/delegacion.jpg"
                                alt="Delegación Efectiva"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col justify-center p-8 md:w-2/3">
                            <span className="mb-3 w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-600">
                                Novedad
                            </span>
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                La Importancia de la Delegación Efectiva
                            </h3>
                            <p className="mb-6 text-gray-600 line-clamp-2">
                                Descubre cómo delegar tareas puede transformar la productividad de tu equipo y liberar tu tiempo para decisiones estratégicas.
                            </p>
                            <a
                                href="/blog"
                                className="font-bold text-blue-600 hover:text-blue-800"
                            >
                                Leer artículo completo
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Isla: Próxima Actividad */}
            <div className="mx-4 rounded-[2.5rem] bg-white p-8 shadow-2xl lg:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">Próxima Actividad</h2>
                    <a
                        href="/actividades"
                        className="rounded-full bg-gray-100 px-6 py-3 text-sm font-bold text-gray-900 transition-all hover:bg-emerald-100 hover:text-emerald-700"
                    >
                        Ver todas las actividades &rarr;
                    </a>
                </div>

                {/* Preview de la Actividad */}
                <div className="group relative overflow-hidden rounded-3xl bg-gray-50 transition-all hover:shadow-lg">
                    <div className="flex flex-col md:flex-row">
                        <div className="h-64 md:h-auto md:w-1/3 overflow-hidden">
                            <img
                                src={futureActivities[0].images[0]}
                                alt={futureActivities[0].title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col justify-center p-8 md:w-2/3">
                            <span className="mb-3 w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-600">
                                {futureActivities[0].date}
                            </span>
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                {futureActivities[0].title}
                            </h3>
                            <p className="mb-6 text-gray-600 line-clamp-2">
                                {futureActivities[0].excerpt}
                            </p>
                            <a
                                href="/actividades"
                                className="font-bold text-emerald-600 hover:text-emerald-800"
                            >
                                Ver detalles del evento
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
