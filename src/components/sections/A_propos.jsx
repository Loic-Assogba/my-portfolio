import Button from '../ui/Button';
import { ArrowUpRight } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function A_propos() {
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
                            Je m'appelle{' '}
                            <span className="text-orange-400 font-medium">
                                Loïc Assogba
                            </span>
                            , développeur web full stack en formation à
                            FuturCraft Institut. Je suis passionné par la
                            création d'expériences digitales modernes et
                            performantes.
                        </p>

                        <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                            J'aime transformer des idées en applications web
                            fonctionnelles en utilisant des technologies
                            modernes comme React, Tailwind CSS et JavaScript.
                        </p>
                        <a href="#cv">
                            <button className="bg-orange-400 text-white px-5 py-2 rounded-md hover:bg-orange-500 transition button-click">
                                Télécharger mon CV
                            </button>
                        </a>
                    </div>

                    {/* COMPÉTENCES */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <div className="bg-gray-900 p-5 md:p-6 rounded-xl text-center hover hover:scale-105 transition">
                            <h3 className="text-2xl md:text-3xl font-bold text-orange-400">
                                6+
                            </h3>
                            <p className="text-gray-400 text-xs md:text-sm">
                                Projets réalisés
                            </p>
                        </div>

                        <div className="bg-gray-900 p-5 md:p-6 rounded-xl text-center hover hover:scale-105 transition">
                            <h3 className="text-2xl md:text-3xl font-bold text-orange-400">
                                1+
                            </h3>
                            <p className="text-gray-400 text-xs md:text-sm">
                                Année d'expérience
                            </p>
                        </div>

                        <div className="bg-gray-900 p-5 md:p-6 rounded-xl text-center hover hover:scale-105 transition">
                            <h3 className="text-2xl md:text-3xl font-bold text-orange-400">
                                5+
                            </h3>
                            <p className="text-gray-400 text-xs md:text-sm">
                                Technologies
                            </p>
                        </div>

                        <div className="bg-gray-900 p-5 md:p-6 rounded-xl text-center hover hover:scale-105 transition">
                            <h3 className="text-2xl md:text-3xl font-bold text-orange-400">
                                100%
                            </h3>
                            <p className="text-gray-400 text-xs md:text-sm">
                                Passion
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </motion.section>
    );
}
