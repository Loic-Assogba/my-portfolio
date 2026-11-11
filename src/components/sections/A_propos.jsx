import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Download,
    Code2,
    ShieldCheck,
    FolderGit2,
    BriefcaseBusiness,
    Layers3,
    Heart,
} from 'lucide-react';
import Counter from '../Counter';

export default function A_propos() {
    const [trigger, setTrigger] = useState(false);

    const stats = [
        {
            icon: FolderGit2,
            target: 6,
            suffix: '+',
            label: 'Projets réalisés',
        },
        {
            icon: BriefcaseBusiness,
            target: 1,
            suffix: '+',
            label: "Années d'expérience",
        },
        {
            icon: Layers3,
            target: 9,
            suffix: '+',
            label: 'Technologies',
        },
        {
            icon: Heart,
            target: 100,
            suffix: '%',
            label: 'Passion',
        },
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            id="a_propos"
            className="m-2 rounded-2xl relative min-h-[90vh] overflow-hidden bg-[#05070b]/70 backdrop-blur-md"
        >
            {/* ================= IMAGES DE FOND ================= */}

            <div className="absolute inset-0 z-0">
                {/* Desktop */}
                <img
                    src="/about.jpeg"
                    alt="Loïc Assogba"
                    className="hidden lg:block absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Mobile */}
                <img
                    src="/about-mobile.jpeg"
                    alt="Loïc Assogba"
                    className="block lg:hidden absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Filtre sombre */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Dégradés */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#05070b]/95 via-[#05070b]/75 to-[#05070b]/30" />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05070b]/50" />

                {/* Halo orange */}
                <div className="absolute top-1/3 left-0 w-72 h-72 bg-orange-400/10 rounded-full blur-[130px]" />
            </div>

            {/* ================= CONTENU ================= */}

            <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8 py-20 lg:py-28">
                {/* TITRE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-14 lg:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-orange-400/20 bg-orange-400/5 backdrop-blur-md">
                        <Code2 size={15} className="text-orange-400" />

                        <span className="text-xs sm:text-sm text-orange-300 tracking-widest uppercase">
                            Qui suis-je ?
                        </span>
                    </div>

                    <h2 className="text-3xl text-center py-4 md:text-4xl lg:text-5xl font-clash font-bold mb-2 animate-fade-in">
                        À propos{' '}
                        <span className="inline-block text-orange-400 animate-float">
                            de moi
                        </span>
                    </h2>

                    <div className="w-16 h-1 bg-orange-400 rounded-full mx-auto mt-2" />
                    <img
                        src="/a-propos.jpeg"
                        alt="Portrait de Loïc Assogba"
                        className="w-64 h-64 rounded-2xl mx-auto mt-5 object-cover brightness-82 md:w-72 md:h-72 lg:w-80 lg:h-80"
                    />
                </motion.div>

                {/* ================= PRESENTATION ================= */}

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* TEXTE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                        className="text-center lg:text-left"
                    >
                        {/* Petit titre */}
                        <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                            <p className="text-orange-400 text-sm font-semibold uppercase tracking-[0.2em]">
                                Mon parcours
                            </p>
                        </div>

                        <div className="space-y-5 text-gray-300 text-sm sm:text-base leading-8">
                            <p>
                                Je suis{' '}
                                <span className="text-orange-400 font-semibold">
                                    Loïc Assogba
                                </span>
                                , développeur Web Full-Stack en formation à
                                FuturCraft Institut et passionné par la
                                cybersécurité. Je m'intéresse à la création
                                d'applications web et à la sécurité
                                informatique.
                            </p>

                            <p>
                                J'utilise des technologies comme React, Next.js,
                                JavaScript, PHP, MySQL et Tailwind CSS, tout en
                                développant mes compétences en réseaux et
                                administration des systèmes.
                            </p>

                            <p>
                                Curieux et persévérant, j'aime relever des défis
                                et concevoir des solutions numériques utiles,
                                performantes et sécurisées. Mon ambition est de
                                combiner développement Full-Stack et
                                cybersécurité.
                            </p>
                        </div>

                        {/* Bouton CV */}
                        <div className="mt-9">
                            <a
                                href="#cv"
                                className="group inline-flex items-center justify-center gap-3 bg-orange-400 text-gray-950 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-orange-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-400/20 active:scale-95"
                            >
                                Télécharger mon CV
                                <Download
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-y-1"
                                />
                            </a>
                        </div>
                    </motion.div>

                    {/* ================= STATISTIQUES ================= */}

                    <motion.div
                        onViewportEnter={() => setTrigger(true)}
                        onViewportLeave={() => setTrigger(false)}
                        viewport={{ amount: 0.3 }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        className="grid grid-cols-2 gap-4 sm:gap-5"
                    >
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;

                            return (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gray-950/60 backdrop-blur-xl p-5 sm:p-7 text-center transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/40 hover:bg-gray-900/80"
                                >
                                    {/* Halo décoratif */}
                                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-orange-400/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Icône */}
                                    <div className="relative w-11 h-11 mx-auto mb-5 flex items-center justify-center rounded-xl border border-orange-400/20 bg-orange-400/10 text-orange-400 group-hover:bg-orange-400 group-hover:text-gray-950 transition-all duration-300">
                                        <Icon size={21} />
                                    </div>

                                    {/* Compteur */}
                                    <h3 className="relative text-3xl sm:text-4xl lg:text-5xl font-semibold text-orange-400">
                                        <Counter
                                            key={trigger ? 'on' : 'off'}
                                            target={stat.target}
                                            trigger={trigger}
                                            suffix={stat.suffix}
                                        />
                                    </h3>

                                    {/* Libellé */}
                                    <p className="relative text-gray-400 text-xs sm:text-sm mt-3 font-medium">
                                        {stat.label}
                                    </p>

                                    {/* Petit trait */}
                                    <div className="w-8 h-[2px] bg-orange-400/40 rounded-full mx-auto mt-4 group-hover:w-14 transition-all duration-300" />
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
