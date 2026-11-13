import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Code2 } from 'lucide-react';

export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            id="hero"
            className="min-h-screen flex items-center relative overflow-hidden"
        >
            {/* Décoration lumineuse */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-400/5 rounded-full blur-[120px] pointer-events-none" />

            <article className="relative max-w-6xl w-full mx-auto px-6 lg:px-8 pt-24 pb-16">
                {/* Petit badge */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-orange-400/30 bg-orange-400/5 text-orange-400 text-sm"
                >
                    <Code2 size={16} />
                    <span>Bienvenue dans mon univers numérique</span>
                </motion.div>

                {/* Présentation */}
                <div className="max-w-4xl">
                    <p className="text-gray-400 text-lg md:text-xl mb-4">
                        Bonjour, je suis
                        <h1 className="text-white/80 font-clash text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-tight">
                            Loïc{' '}
                            <span className="text-orange-400">ASSOGBA</span>
                            <span className="text-orange-400">.</span>
                        </h1>
                    </p>

                    <h2 className="mt-6 text-2xl sm:text-2xl md:text-4xl text-gray-200 font-medium">
                        Développeur Web
                        <span className="text-orange-400"> Full Stack</span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed">
                        Je conçois des expériences web modernes, intuitives et
                        responsives. Passionné par les technologies, je
                        développe mes compétences et explore également l'univers
                        de la cybersécurité.
                    </p>

                    {/* Boutons */}
                    <div className="flex flex-wrap items-center gap-4 mt-10">
                        <a
                            href="#projets"
                            className="inline-flex items-center gap-3 bg-orange-400 text-gray-950 px-6 py-3 rounded-lg font-semibold text-sm hover:bg-orange-500 transition-all duration-300 hover:-translate-y-1"
                        >
                            Découvrir mes projets
                            <ArrowUpRight size={18} />
                        </a>

                        <a
                            href="#cv"
                            className="inline-flex items-center gap-3 border border-white/20 text-white px-6 py-3 rounded-lg font-medium text-sm hover:border-orange-400 hover:text-orange-400 transition-all duration-300"
                        >
                            Consulter mon CV
                        </a>
                    </div>
                </div>
            </article>
        </motion.section>
    );
}
