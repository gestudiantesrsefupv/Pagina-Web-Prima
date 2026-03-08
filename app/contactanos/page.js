'use client';

import Image from 'next/image';

export default function ContactPage() {
    return (
        <div className="container mx-auto pb-20">
            {/* Hero Section */}
            <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
                <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl drop-shadow-lg">
                    Contáctanos
                </h1>
                <p className="max-w-2xl mt-6 text-xl text-white/90 font-light leading-relaxed drop-shadow-md">
                    ¿Tienes dudas, propuestas o simplemente quieres saludar? Estamos aquí para escucharte y seguir construyendo comunidad.
                </p>
            </div>

            {/* Collaboration Section (Email) */}
            <div className="mx-4 rounded-[2.5rem] bg-gradient-to-br from-blue-400 to-indigo-700 p-8 lg:p-16 shadow-2xl mb-12 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                <div className="relative z-10">
                    <div className="max-w-3xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Quieres colaborar?</h2>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                            Si tienes una idea para un taller, charla, o te gustaría formar parte activa de la delegación, ¡escríbenos!
                        </p>
                        <a
                            href="mailto:g.estudiantesrsef.upv@gmail.com"
                            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-700 shadow-lg transition-transform hover:scale-105 active:scale-95"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Enviar correo electrónico
                        </a>
                    </div>
                </div>

                {/* Demon Image - Absolute Positioned in Corner */}
                <div className="absolute -bottom-9 -right-9 hidden md:block">
                    <Image
                        src="/images/demonio/demonio1.png"
                        alt="Demonio colaborador"
                        width={256}
                        height={256}
                        className="h-64 w-auto object-contain drop-shadow-2xl opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300"
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Instagram Section */}
            <div className="mx-4 rounded-[2.5rem] bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-8 lg:p-16 shadow-2xl text-center mb-12 relative overflow-hidden group">
                {/* Background decorative logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none transition-transform duration-700 group-hover:scale-110">
                    <svg className="w-96 h-96 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.488 2h-.173zM12.315 4.675c-2.677 0-2.997.01-4.047.059-.945.045-1.455.204-1.795.335-.469.182-.806.398-1.15.742-.35.344-.56.681-.742 1.15-.13.34-.29.85-.335 1.795-.048 1.05-.06 1.37-.06 4.047v.2c0 2.677.01 2.997.059 4.047.045.945.204 1.455.335 1.795.182.469.398.806.742-1.15.344.35.681.56-1.15-.742.459-.13.85-.29 1.795-.335 1.05-.048 1.37-.06 4.047-.06h-.2zm0 4.38a3.253 3.253 0 100 6.505 3.253 3.253 0 000-6.505zm0 1.838a1.415 1.415 0 110 2.83 1.415 1.415 0 010-2.83zm5.877-3.696a1.22 1.22 0 11-2.44 0 1.22 1.22 0 012.44 0z" clipRule="evenodd" />
                    </svg>
                </div>

                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Síguenos las pistas</h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
                        Si quieres seguir al tanto de lo que hacemos, síguenos en Instagram y activa las notificaciones para no perderte nada.
                    </p>

                    <a
                        href="https://www.instagram.com/estudiantesrsef_upv/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-pink-600 text-lg font-bold shadow-lg transition-transform hover:scale-105 hover:shadow-xl hover:text-purple-600"
                    >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.488 2h-.173zM12.315 4.675c-2.677 0-2.997.01-4.047.059-.945.045-1.455.204-1.795.335-.469.182-.806.398-1.15.742-.35.344-.56.681-.742 1.15-.13.34-.29.85-.335 1.795-.048 1.05-.06 1.37-.06 4.047v.2c0 2.677.01 2.997.059 4.047.045.945.204 1.455.335 1.795.182.469.398.806.742-1.15.344.35.681.56-1.15-.742.459-.13.85-.29 1.795-.335 1.05-.048 1.37-.06 4.047-.06h-.2zm0 4.38a3.253 3.253 0 100 6.505 3.253 3.253 0 000-6.505zm0 1.838a1.415 1.415 0 110 2.83 1.415 1.415 0 010-2.83zm5.877-3.696a1.22 1.22 0 11-2.44 0 1.22 1.22 0 012.44 0z" clipRule="evenodd" />
                        </svg>
                        Seguir en Instagram
                    </a>
                </div>
            </div>

            {/* Links Grid (RSEF & GdeE) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">

                {/* Card 1: RSEF Link */}
                <a
                    href="https://rsef.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 font-bold text-9xl text-gray-900 group-hover:opacity-20 transition-opacity">
                        RSEF
                    </div>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Real Sociedad Española de Física</h3>
                            <p className="text-gray-600 text-lg">
                                Visita la web oficial de la institución histórica que promueve la física en España.
                            </p>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all">
                            Ir a la web <span className="text-2xl">&rarr;</span>
                        </div>
                    </div>
                </a>

                {/* Card 2: GdeE Link */}
                <a
                    href="https://estudiantes.rsef.es/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 font-bold text-9xl text-emerald-600 group-hover:opacity-20 transition-opacity">
                        GdeE
                    </div>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Grupo de Estudiantes</h3>
                            <p className="text-gray-600 text-lg">
                                Conoce más sobre la sección joven de la RSEF y nuestra red nacional.
                            </p>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-emerald-600 font-bold group-hover:gap-4 transition-all">
                            Ir a la web <span className="text-2xl">&rarr;</span>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    );
}
