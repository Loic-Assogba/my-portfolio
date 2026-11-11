import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FileText,
    Download,
    FolderCheck,
    BriefcaseBusiness,
    ArrowDownToLine,
    Eye,
} from 'lucide-react';
import Counter from '../Counter';

export default function CV() {
    const [trigger, setTrigger] = useState(false);

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            id="cv"
            className="relative m-3 rounded-2xl overflow-hidden border border-white/10 bg-gray-950/60 backdrop-blur-xl"
        >
            {/* HALO DÉCORATIF */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-400/10 rounded-full blur-[120px] pointer-events-none" />

            <article className="relative z-10 max-w-6xl mx-auto px-6 py-16 lg:py-20 text-white">
                {/* ================= TITRE ================= */}

                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-orange-400/20 bg-orange-400/5">
                        <FileText size={16} className="text-orange-400" />

                        <span className="text-xs sm:text-sm text-orange-300 uppercase tracking-[0.2em] font-medium">
                            Mon parcours professionnel
                        </span>
                    </div>

                    <h2 className="text-3xl text-center py-4 md:text-4xl lg:text-5xl font-clash font-bold animate-fade-in">
                        Mon{' '}
                        <span className="inline-block text-orange-400 animate-float">
                            CV
                        </span>
                    </h2>

                    <div className="w-16 h-1 bg-orange-400 rounded-full mx-auto mt-5" />

                    <p className="text-gray-400 max-w-xl mx-auto mt-6 text-sm sm:text-base leading-relaxed">
                        Découvrez mon parcours, mes compétences et mes
                        expériences en développement web.
                    </p>
                </div>

                {/* ================= CONTENU ================= */}

                <motion.div
                    onViewportEnter={() => setTrigger(true)}
                    onViewportLeave={() => setTrigger(false)}
                    viewport={{ amount: 0.3 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                >
                    {/* ================= INFORMATIONS ================= */}

                    <div className="space-y-8">
                        <div className="flex items-center gap-3 justify-center lg:justify-start">
                            <p className="text-orange-400 text-sm font-semibold uppercase tracking-[0.2em]">
                                En quelques chiffres
                            </p>
                        </div>

                        {/* STATISTIQUES */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* EXPÉRIENCE */}
                            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-orange-400/40">
                                <div className="w-11 h-11 mx-auto mb-4 flex items-center justify-center rounded-xl bg-orange-400/10 text-orange-400 group-hover:bg-orange-400 group-hover:text-gray-950 transition-all duration-300">
                                    <BriefcaseBusiness size={21} />
                                </div>

                                <h3 className="text-orange-400 text-3xl sm:text-4xl font-semibold font-clash">
                                    <Counter
                                        key={trigger ? 'on' : 'off'}
                                        target={1}
                                        trigger={trigger}
                                        suffix="+"
                                    />
                                </h3>

                                <p className="text-sm text-gray-400 mt-2">
                                    Année d'expérience
                                </p>
                            </div>

                            {/* PROJETS */}
                            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-orange-400/40">
                                <div className="w-11 h-11 mx-auto mb-4 flex items-center justify-center rounded-xl bg-orange-400/10 text-orange-400 group-hover:bg-orange-400 group-hover:text-gray-950 transition-all duration-300">
                                    <FolderCheck size={21} />
                                </div>

                                <h3 className="text-orange-400 text-3xl sm:text-4xl font-semibold font-clash">
                                    <Counter
                                        key={trigger ? 'on' : 'off'}
                                        target={6}
                                        trigger={trigger}
                                        suffix="+"
                                    />
                                </h3>

                                <p className="text-sm text-gray-400 mt-2">
                                    Projets
                                </p>
                            </div>
                        </div>

                        {/* DESCRIPTION */}
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-center lg:text-left">
                            Rigoureux et passionné par les technologies
                            numériques, je continue de développer mes
                            compétences pour concevoir des solutions
                            performantes et adaptées aux besoins réels.
                        </p>

                        {/* BOUTON */}
                        <div className="flex justify-center lg:justify-start">
                            <a
                                href="/cv-loicassogba.pdf"
                                download
                                className="group inline-flex items-center gap-3 bg-orange-400 text-gray-950 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-orange-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-400/20 active:scale-95"
                            >
                                <Download size={18} />
                                Télécharger mon CV
                                <ArrowDownToLine
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-y-1"
                                />
                            </a>
                        </div>
                    </div>

                    {/* ================= APERÇU DU CV ================= */}

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: false }}
                        className="relative group"
                    >
                        {/* Conteneur image */}
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/30">
                            <img
                                src="/cv1.png"
                                alt="CV Preview"
                                className="w-full object-cover brightness-90 group-hover:scale-105 transition duration-700"
                            />

                            {/* Filtre bleu */}
                            <div className="absolute inset-0 bg-blue-950/50 group-hover:bg-blue-950/25 backdrop-blur-[1px] transition-all duration-500" />

                            {/* Dégradé */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />

                            {/* Badge PDF */}
                            <span className="absolute top-4 right-4 inline-flex items-center gap-2 text-xs px-3 py-2 rounded-full bg-gray-800/80 backdrop-blur-md text-orange-400 border border-orange-400/30 font-semibold">
                                <FileText size={14} />
                                DOCUMENT PDF
                            </span>

                            {/* Indication aperçu */}
                            <div className="absolute bottom-5 left-5 flex items-center gap-2 text-white/80 text-sm">
                                <Eye size={17} className="text-orange-400" />
                                Aperçu de mon CV
                            </div>
                        </div>

                        {/* Décoration */}
                        <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-orange-400/40 rounded-br-2xl -z-10" />
                    </motion.div>
                </motion.div>
            </article>
        </motion.section>
    );
}
