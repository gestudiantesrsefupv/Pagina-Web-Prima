import { futureActivities, pastActivities } from "@/lib/activities";
import ActivityCard from "./ActivityCard";

export default function ActivitiesPage() {
    return (
        <div className="container mx-auto pb-20">

            {/* Header Section */}
            <div className="py-16 text-center">
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl drop-shadow-sm">
                    Nuestras Actividades
                </h1>
                <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto font-medium">
                    Descubre los eventos que organizamos para aprender, compartir y crecer juntos.
                </p>
            </div>

            {/* Sección Blanca Principal */}
            <div className="mx-4 rounded-[2.5rem] bg-white p-8 shadow-2xl lg:p-12 space-y-16">

                {/* Actividades Futuras */}
                <section>
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold text-gray-900">Próximas Actividades</h2>
                        <div className="mt-2 h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
                        <p className="mt-4 text-gray-500">¡No te las pierdas! Reserva la fecha.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {futureActivities.map((activity) => (
                            <ActivityCard key={activity.id} activity={activity} />
                        ))}
                    </div>
                </section>

                {/* Separador */}
                <hr className="border-gray-100" />

                {/* Actividades Pasadas */}
                <section>
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold text-gray-900">Actividades Pasadas</h2>
                        <p className="mt-2 text-gray-500">Recuerdos de nuestros mejores momentos.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {pastActivities.map((activity) => (
                            <ActivityCard key={activity.id} activity={activity} />
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}
