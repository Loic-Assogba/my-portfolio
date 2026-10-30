import Button from '../ui/Button';
import { ArrowUpRight } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Counter from '../Counter';
import { useState } from 'react';

export default function A_propos() {
    const [trigger, setTrigger] = useState(false);

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            id="a_propos"
            className="min-h-[90vh] bg-gray-950"
        >
            <h1 className="font-clash text-3xl font-bold pt-20 lg:text-6xl text-center w-full p-4 md:text-4xl mb-6">
                À{' '}
                <span className="inline-block text-orange-400 animate-float">
                    propos de moi
                </span>
            </h1>
            <article className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto p-4 lg:p-8">
                <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
                    {/* halo animé */}
                    <div className="absolute w-72 h-72 bg-orange-400/30 rounded-full blur-3xl animate-pulse lg:w-44 lg:h-96"></div>

                    {/* image */}
                    <img
                        src="/about.jpeg"
                        alt="A propos"
                        className="relative w-64 h-80 object-cover rounded-full border-4 border-orange-400 lg:w-80 lg:h-96"
                    />
                </div>{' '}
                <div className="max-w-6xl mx-auto px-4 py-4 grid gap-10 md:grid-cols-2 items-center">
                    {/* TEXTE */}
                    <div className="text-center md:text-left">
                        <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
                            Je suis{' '}
                            <span className="text-orange-400 font-medium">
                                Loïc Assogba
                            </span>
                            , développeur Web Full-Stack en formation à
                            FuturCraft Institut et actuellement engagé dans un
                            parcours d'apprentissage en cybersécurité. Passionné
                            par le numérique, je m'intéresse autant à la
                            création d'applications web qu'à la sécurité des
                            environnements informatiques.
                        </p>

                        <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base">
                            Mon parcours m'a permis d'explorer plusieurs
                            technologies, notamment React, Next.js, JavaScript,
                            PHP, MySQL et Tailwind CSS. Je développe également
                            mes connaissances en réseaux informatiques,
                            administration des systèmes et sécurité
                            informatique.
                        </p>

                        <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                            Curieux, persévérant et orienté vers la pratique,
                            j'aime relever de nouveaux défis, expérimenter et
                            transformer des idées en solutions numériques
                            utiles. Mon ambition est de développer une expertise
                            qui allie développement Full-Stack et cybersécurité
                            afin de concevoir des applications performantes et
                            sécurisées.
                        </p>

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
                        <div className="group relative overflow-hidden bg-gray-900 p-4 sm:p-6 rounded-2xl text-center border border-white/5 hover:border-orange-400/30 transition-all duration-300 hover:-translate-y-1">
                            <div className="absolute -right-8 -top-8 w-20 h-20 bg-orange-400/5 rounded-full blur-2xl group-hover:bg-orange-400/15 transition-all" />

                            <h3 className="text-3xl sm:text-4xl font-bold text-orange-400 relative">
                                <Counter
                                    key={trigger ? 'on' : 'off'}
                                    target={6}
                                    trigger={trigger}
                                    suffix="+"
                                />
                            </h3>

                            <p className="text-gray-400 text-xs sm:text-sm mt-2">
                                Projets réalisés
                            </p>
                        </div>

                        {/* Expérience */}
                        <div className="group relative overflow-hidden bg-gray-900 p-4 sm:p-6 rounded-2xl text-center border border-white/5 hover:border-orange-400/30 transition-all duration-300 hover:-translate-y-1">
                            <div className="absolute -right-8 -top-8 w-20 h-20 bg-orange-400/5 rounded-full blur-2xl group-hover:bg-orange-400/15 transition-all" />

                            <h3 className="text-3xl sm:text-4xl font-bold text-orange-400 relative">
                                <Counter
                                    key={trigger ? 'on' : 'off'}
                                    target={2}
                                    trigger={trigger}
                                    suffix="+"
                                />
                            </h3>

                            <p className="text-gray-400 text-xs sm:text-sm mt-2">
                                Années d'expérience
                            </p>
                        </div>

                        {/* Technologies */}
                        <div className="group relative overflow-hidden bg-gray-900 p-4 sm:p-6 rounded-2xl text-center border border-white/5 hover:border-orange-400/30 transition-all duration-300 hover:-translate-y-1">
                            <div className="absolute -right-8 -top-8 w-20 h-20 bg-orange-400/5 rounded-full blur-2xl group-hover:bg-orange-400/15 transition-all" />

                            <h3 className="text-3xl sm:text-4xl font-bold text-orange-400 relative">
                                <Counter
                                    key={trigger ? 'on' : 'off'}
                                    target={9}
                                    trigger={trigger}
                                    suffix="+"
                                />
                            </h3>

                            <p className="text-gray-400 text-xs sm:text-sm mt-2">
                                Technologies
                            </p>
                        </div>

                        {/* Passion */}
                        <div className="group relative overflow-hidden bg-gray-900 p-4 sm:p-6 rounded-2xl text-center border border-white/5 hover:border-orange-400/30 transition-all duration-300 hover:-translate-y-1">
                            <div className="absolute -right-8 -top-8 w-20 h-20 bg-orange-400/5 rounded-full blur-2xl group-hover:bg-orange-400/15 transition-all" />

                            <h3 className="text-3xl sm:text-4xl font-bold text-orange-400 relative">
                                <Counter
                                    key={trigger ? 'on' : 'off'}
                                    target={100}
                                    trigger={trigger}
                                    suffix="%"
                                />
                            </h3>

                            <p className="text-gray-400 text-xs sm:text-sm mt-2">
                                Passion
                            </p>
                        </div>
                    </motion.div>
                </div>
            </article>
        </motion.section>
    );
}
