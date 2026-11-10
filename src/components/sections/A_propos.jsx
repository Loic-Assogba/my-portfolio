import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Counter from '../Counter';

export default function A_propos() {
    const [trigger, setTrigger] = useState(false);

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            id="a_propos"
            className="relative min-h-[90vh] overflow-hidden bg-[#05070b]"
        >
            {/* IMAGES DE FOND RESPONSIVES */}
            <div className="absolute inset-0 z-0">
                {/* IMAGE DESKTOP */}
                <img
                    src="/about-bg.jpeg"
                    alt="Loïc Assogba"
                    className="hidden lg:block absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* IMAGE MOBILE */}
                <img
                    src="/about-mobile.jpeg"
                    alt="Loïc Assogba"
                    className="block lg:hidden absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* FILTRE SOMBRE */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* DÉGRADÉ */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#05070b]/90 via-[#05070b]/70 to-transparent"></div>
            </div>

            {/* CONTENU */}
            <div className="relative z-10">
                <h1 className="font-clash text-3xl font-bold pt-20 lg:text-6xl text-center w-full p-4 md:text-4xl mb-6">
                    À{' '}
                    <span className="inline-block text-orange-400 animate-float">
                        propos de moi
                    </span>
                </h1>

                <article className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto p-4 lg:p-8">
                    {/* TEXTE */}
                    <div className="max-w-6xl mx-auto px-4 py-4 grid gap-10 md:grid-cols-2 items-center">
                        <div className="text-center md:text-left scale-90">
                            <div>
                                <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                                    Je suis{' '}
                                    <span className="text-orange-400 font-medium">
                                        Loïc Assogba
                                    </span>
                                    , développeur Web Full-Stack en formation à
                                    FuturCraft Institut et passionné par la
                                    cybersécurité. Je m'intéresse à la création
                                    d'applications web et à la sécurité
                                    informatique.
                                </p>

                                <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                                    J'utilise des technologies comme React,
                                    Next.js, JavaScript, PHP, MySQL et Tailwind
                                    CSS, tout en développant mes compétences en
                                    réseaux et administration des systèmes.
                                </p>

                                <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                                    Curieux et persévérant, j'aime relever des
                                    défis et concevoir des solutions numériques
                                    utiles, performantes et sécurisées. Mon
                                    ambition est de combiner développement
                                    Full-Stack et cybersécurité.
                                </p>
                            </div>

                            <a
                                href="#cv"
                                className="inline-block bg-orange-400 text-white px-5 py-2.5 rounded-md hover:bg-orange-500 transition button-click"
                            >
                                Télécharger mon CV
                            </a>
                        </div>

                        {/* COMPÉTENCES */}
                        <motion.div
                            onViewportEnter={() => setTrigger(true)}
                            onViewportLeave={() => setTrigger(false)}
                            viewport={{ amount: 0.3 }}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9 }}
                            className="grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-5 lg:gap-10 items-stretch"
                        >
                            {/* Projets */}
                            <div className="group relative overflow-hidden bg-gray-900/70 backdrop-blur-md p-4 sm:p-6 rounded-2xl text-center border border-white/10 hover:border-orange-400/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="absolute -right-8 -top-8 w-20 h-20 bg-orange-400/5 rounded-full blur-2xl group-hover:bg-orange-400/15 transition-all" />

                                <h3 className="text-3xl sm:text-4xl font-bold text-orange-400 relative">
                                    <Counter
                                        key={trigger ? 'on' : 'off'}
                                        target={6}
                                        trigger={trigger}
                                        suffix="+"
                                    />
                                </h3>

                                <p className="text-gray-300 text-xs sm:text-sm mt-2">
                                    Projets réalisés
                                </p>
                            </div>

                            {/* Expérience */}
                            <div className="group relative overflow-hidden bg-gray-900/70 backdrop-blur-md p-4 sm:p-6 rounded-2xl text-center border border-white/10 hover:border-orange-400/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="absolute -right-8 -top-8 w-20 h-20 bg-orange-400/5 rounded-full blur-2xl group-hover:bg-orange-400/15 transition-all" />

                                <h3 className="text-3xl sm:text-4xl font-bold text-orange-400 relative">
                                    <Counter
                                        key={trigger ? 'on' : 'off'}
                                        target={1}
                                        trigger={trigger}
                                        suffix="+"
                                    />
                                </h3>

                                <p className="text-gray-300 text-xs sm:text-sm mt-2">
                                    Années d'expérience
                                </p>
                            </div>

                            {/* Technologies */}
                            <div className="group relative overflow-hidden bg-gray-900/70 backdrop-blur-md p-4 sm:p-6 rounded-2xl text-center border border-white/10 hover:border-orange-400/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="absolute -right-8 -top-8 w-20 h-20 bg-orange-400/5 rounded-full blur-2xl group-hover:bg-orange-400/15 transition-all" />

                                <h3 className="text-3xl sm:text-4xl font-bold text-orange-400 relative">
                                    <Counter
                                        key={trigger ? 'on' : 'off'}
                                        target={9}
                                        trigger={trigger}
                                        suffix="+"
                                    />
                                </h3>

                                <p className="text-gray-300 text-xs sm:text-sm mt-2">
                                    Technologies
                                </p>
                            </div>

                            {/* Passion */}
                            <div className="group relative overflow-hidden bg-gray-900/70 backdrop-blur-md p-4 sm:p-6 rounded-2xl text-center border border-white/10 hover:border-orange-400/30 transition-all duration-300 hover:-translate-y-1">
                                <div className="absolute -right-8 -top-8 w-20 h-20 bg-orange-400/5 rounded-full blur-2xl group-hover:bg-orange-400/15 transition-all" />

                                <h3 className="text-3xl sm:text-4xl font-bold text-orange-400 relative">
                                    <Counter
                                        key={trigger ? 'on' : 'off'}
                                        target={100}
                                        trigger={trigger}
                                        suffix="%"
                                    />
                                </h3>

                                <p className="text-gray-300 text-xs sm:text-sm mt-2">
                                    Passion
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </article>
            </div>
        </motion.section>
    );
}
