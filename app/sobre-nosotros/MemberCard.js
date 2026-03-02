import Image from 'next/image';

export default function MemberCard({ member, isCollaborator = false, simple = false }) {
    return (
        <div
            className={`flex flex-col h-full overflow-hidden
                ${simple
                    ? 'bg-transparent rounded-xl'
                    : 'rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
                }`}
        >
            {!simple && member.image && (
                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                </div>
            )}

            <div className={`flex flex-col flex-grow text-center ${simple ? 'p-2' : 'p-6'}`}>
                <h2 className={`font-bold text-gray-900 mb-1 ${simple ? 'text-sm' : 'text-xl'}`}>
                    {member.name}
                </h2>
                <p className={`font-medium text-blue-600 ${simple ? 'text-xs' : 'text-sm'}`}>
                    {member.role}
                </p>

            </div>
        </div>
    );
}
