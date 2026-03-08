import { getAllPosts } from "@/lib/posts";
import PostCard from "./PostCard";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="container mx-auto pb-20">
            {/* Header Section (Mantiene el fondo degradado global visible) */}
            <div className="py-16 text-center">
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl drop-shadow-sm">
                    Nuestro Blog
                </h1>
                <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto font-medium">
                    Explora nuestros últimos artículos, pensamientos y estrategias para el éxito.
                </p>
            </div>

            {/* Sección Blanca con Grid de Posts */}
            <div className="mx-4 rounded-[2.5rem] bg-white p-8 shadow-2xl lg:p-12">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-start">
                    {posts.map((post) => (
                        <PostCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
