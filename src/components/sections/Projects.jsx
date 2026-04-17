export default function Projects() {
    const projects = [
        {
            title: 'Portfolio Personnel',
            description: 'Mon portfolio développé avec React et Tailwind.',
            image: '/portfolio.png',
            tech: 'React • Tailwind',
            status: 'Terminé',
        },
        {
            title: 'Valentin 2.0',
            description: 'Site basic incarnant un amour naissant.',
            image: '/valentin.png',
            tech: 'HTML • Tailwind & JS',
            status: 'Terminé',
        },
        {
            title: 'Gozem-luxe',
            description:
                'Site de luxe pour les commandes de voitures haut de gamme.',
            image: '/luxe.png',
            tech: 'React • Tailwind',
            status: 'En pause',
        },
        {
            title: 'Calculatrice',
            description: 'Calculatrice web fonctionnelle.',
            image: '/calculatrice.png',
            tech: 'HTML • Tailwind & JS',
            status: 'Terminé',
        },
        {
            title: 'Benin-Immo',
            description: 'Site immobilier pour les ventes et locations.',
            image: '/benin-immo.png',
            tech: 'HTML • Tailwind & JS',
            status: 'En cours',
        },
        {
            title: 'Solana',
            description: 'Landing page pour la blockchain Solana.',
            image: '/solana.png',
            tech: 'HTML • Tailwind',
            status: 'En pause',
        },
        {
            title: 'Gods Plan',
            description: 'Landing page de présentation de Gods Plan Institut.',
            image: '/god-s-plan.png',
            tech: 'HTML • Tailwind',
            status: 'Terminé',
        },
    ];

    return (
        <section id="projets" className="max-w-6xl mx-auto px-6 py-20 pb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-clash text-white mb-4 text-center">
                Mes{' '}
                <span className="inline-block text-orange-400 animate-float">
                    Projets
                </span>
            </h2>
            <p className="text-center text-gray-400 mb-12">
                Des projets concrès qui réflète mes compétences et ma passion
                pour le développement web.
            </p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="group relative overflow-hidden rounded-xl bg-gray-900 border border-white/10 hover:border-orange-400/50 transition-all duration-300"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        <div className="p-5 space-y-2">
                            <h3 className="text-lg font-semibold text-white">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm">
                                {project.description}
                            </p>

                            <span className="text-orange-400 text-xs">
                                {project.tech}
                            </span>

                            <span className="text-xs px-2 py-1 rounded-full bg-orange-400/10 text-orange-400 border border-orange-400/30 m-2">
                                {project.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
