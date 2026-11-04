import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Projects({ showAll = false }) {
    const projects = [
        {
            title: 'Programme FUTUR',
            description: 'Site de présentation du Programme FUTUR',
            image: '/programmefutur.png',
            tech: 'Next.js • Tailwind ',
            status: 'Terminé',
            link: 'https://programmefutur.africa/',
        },
        {
            title: 'Inscription Gala des Leaders & Awards',
            description:
                "Plateforme d'inscription pour le Gala des Leaders & Awards.",
            image: '/gala.png',
            tech: 'Next.js • Tailwind • PHP • MySQL',
            status: 'En cours',
            link: 'https://galadesleaders-inscription.wuaze.com',
        },
        {
            title: 'FuturCradt INSTITUT',
            description: 'Plareforme complète du FuturCraft INSTITUT.',
            image: '/futurcraft.png',
            tech: 'Next.js • Tailwind',
            status: 'En cours',
            link: 'https://futurcraft-institut-seven.vercel.app',
        },
        {
            title: 'Portfolio Personnel',
            description: 'Mon portfolio développé avec React et Tailwind.',
            image: '/portfolio.png',
            tech: 'React • Tailwind',
            status: 'Terminé',
            link: 'https://loicassogba.vercel.app',
        },
        {
            title: 'Valentin 2.0',
            description: 'Site basique incarnant un amour naissant.',
            image: '/valentin.png',
            tech: 'HTML • Tailwind • JS',
            status: 'Terminé',
            link: 'https://valentin-2point0.netlify.app',
        },
        {
            title: 'Benin-Immo',
            description:
                'Plateforme immobilière dédiée aux ventes et locations.',
            image: '/benin-immo.png',
            tech: 'Next.js • Tailwind',
            status: 'En cours',
            link: 'https://benin-immo.vercel.app/',
        },
        {
            title: 'Solana',
            description:
                'Landing page de présentation de la blockchain Solana.',
            image: '/solana1.png',
            tech: 'HTML • Tailwind • JS',
            status: 'Terminé',
            link: 'https://solana-ksm.netlify.app',
        },
        {
            title: "God's Plan",
            description: 'Landing page de présentation de Gods Plan Institut.',
            image: '/god-s-plan.png',
            tech: 'HTML • Tailwind',
            status: 'Terminé',
            link: '',
        },
    ];

    const statusStyle = {
        Terminé: 'text-green-400 bg-green-400/10 border-green-400/20',
        'En cours': 'text-blue-400 bg-blue-400/10 border-blue-400/20',
        'En pause': 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    };

    const displayedProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            id="projets"
            className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-28"
        >
            {/* DÉCORATION */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-orange-400/5 blur-[120px] rounded-full pointer-events-none" />

            {/* TITRE */}
            <div className="relative text-center mb-14 lg:mb-16">
                <h2 className="text-4xl md:text-5xl font-bold font-clash text-white mt-4 mb-5">
                    Mes{' '}
                    <span className="inline-block text-orange-400 animate-float">
                        Projets
                    </span>
                </h2>

                <p className="text-center text-gray-400 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
                    Des projets concrets qui reflètent mes compétences et ma
                    passion pour le développement web.
                </p>
            </div>

            {/* CARTES */}
            <div className="relative grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {displayedProjects.map((project, i) => (
                    <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: (i % 3) * 0.1,
                        }}
                        viewport={{ once: false, amount: 0.2 }}
                        className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-white/10 hover:border-orange-400/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-400/5 flex flex-col"
                    >
                        {/* IMAGE */}
                        <div className="relative h-52 sm:h-56 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent opacity-80" />

                            {/* STATUT */}
                            <span
                                className={`absolute top-4 right-4 text-xs font-medium px-3 py-1.5 rounded-full border backdrop-blur-md ${
                                    statusStyle[project.status]
                                }`}
                            >
                                {project.status}
                            </span>

                            {/* NUMÉRO */}
                            <span className="absolute bottom-4 left-5 text-white/70 text-xs tracking-widest">
                                PROJET {String(i + 1).padStart(2, '0')}
                            </span>
                        </div>

                        {/* CONTENU */}
                        <div className="p-5 sm:p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors duration-300">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mt-3 min-h-[42px]">
                                {project.description}
                            </p>

                            {/* TECHNOLOGIES */}
                            <div className="mt-5">
                                <span className="inline-block text-orange-400 text-xs font-medium bg-orange-400/10 border border-orange-400/10 px-3 py-1.5 rounded-lg">
                                    {project.tech}
                                </span>
                            </div>

                            {/* BOUTON */}
                            <div className="mt-auto pt-6">
                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 bg-orange-400/10 hover:bg-orange-400 text-orange-400 hover:text-gray-950 border border-orange-400/30 hover:border-orange-400 rounded-xl py-3 text-sm font-semibold transition-all duration-300"
                                    >
                                        Voir le projet
                                        <ArrowUpRight
                                            size={18}
                                            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </a>
                                ) : (
                                    <button
                                        type="button"
                                        disabled
                                        className="w-full inline-flex items-center justify-center gap-2 bg-gray-800 text-gray-500 border border-white/5 rounded-xl py-3 text-sm font-semibold cursor-not-allowed"
                                        title="Lien du projet à ajouter"
                                    >
                                        Voir le projet
                                        <ExternalLink size={16} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

            {/* BOUTON VOIR DAVANTAGE */}
            {!showAll && (
                <div className="flex justify-center mt-12">
                    <Link
                        to="/tous-les-projets"
                        className="group flex items-center gap-3 px-7 py-3.5 rounded-xl border border-orange-400/40 text-orange-400 hover:bg-orange-400 hover:text-gray-950 font-semibold transition-all duration-300"
                    >
                        Voir davantage
                        <ArrowUpRight
                            size={20}
                            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                    </Link>
                </div>
            )}
        </motion.section>
    );
}
