import { importantMembers, otherMembers } from "@/lib/members";
import MemberCard from "./MemberCard";

export default function AboutPage() {
    return (
        <div className="container mx-auto pb-20">
            {/* Header Section */}
            <div className="py-16 text-center">
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl drop-shadow-sm">
                    Nuestro Equipo
                </h1>
                <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto font-medium">
                    Conoce a las personas apasionadas que hacen posible nuestra misión.
                </p>
            </div>

            {/* Sección Blanca Principal */}
            <div className="mx-4 rounded-[2.5rem] bg-white p-8 shadow-2xl lg:p-12 space-y-16">

                {/* Sección: Miembros Importantes (Con Foto) */}
                <section>
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold text-gray-900">Junta Directiva y Colaboradores Principales</h2>
                        <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {importantMembers.map((member) => (
                            <MemberCard key={member.id} member={member} />
                        ))}
                    </div>
                </section>

                {/* Separador */}
                <hr className="border-gray-100" />

                {/* Sección: Resto del Equipo (Sin Foto) */}
                <section>
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold text-gray-900">Colaboradores</h2>
                        <p className="mt-2 text-gray-500">Profesionales que aportan su talento a nuestra visión</p>
                    </div>

                    {/* Otros Colaboradores (8 por fila) */}
                    {/* Otros Colaboradores (Centrados) */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {otherMembers.map((collab) => (
                            <div key={collab.id} className="w-[calc(50%-0.5rem)] sm:w-[calc(25%-0.75rem)] lg:w-[calc(12.5%-0.875rem)]">
                                <MemberCard member={collab} simple={true} />
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
