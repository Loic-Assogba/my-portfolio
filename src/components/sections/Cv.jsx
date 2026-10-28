import Button from '../ui/Button';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Counter from '../Counter';
import { useState } from 'react';

export default function CV() {
    const [trigger, setTrigger] = useState(false);
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            id="cv"
            className="bg-gray-950"
        >
            <article className="max-w-6xl mx-auto px-6 py-10 text-white">
                {/* TITLE */}
                <h2 className="text-3xl text-center py-10 md:text-4xl font-clash font-bold mb-10 animate-fade-in">
                    Mon{' '}
                    <span className="inline-block text-orange-400 animate-float">
                        CV
                    </span>
                </h2>

                {/* CONTAINER */}
                <motion.div
                    onViewportEnter={() => setTrigger(true)}
                    onViewportLeave={() => setTrigger(false)}
                    viewport={{ amount: 0.3 }}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9 }}
                    className="grid lg:grid-cols-2 gap-10 items-center"
                >
                    {/* LEFT - INFO */}
                    <div className="space-y-6 animate-slide-in">
                        <p className="text-gray-400 leading-relaxed text-center">
                            Découvrez mon parcours, mes compétences et mes
                            expériences en développement web.
                        </p>

                        {/* STATS */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-900 p-5 rounded-xl text-center hover:scale-105 transition">
                                <h3 className="text-orange-400 text-2xl font-bold">
                                    <Counter
                                        key={trigger ? 'on' : 'off'}
                                        target={1}
                                        trigger={trigger}
                                        suffix="+"
                                    />
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Année d'expérience
                                </p>
                            </div>

                            <div className="bg-gray-900 p-5 rounded-xl text-center hover:scale-105 transition">
                                <h3 className="text-orange-400 text-2xl font-bold">
                                    <Counter
                                        key={trigger ? 'on' : 'off'}
                                        target={10}
                                        trigger={trigger}
                                        suffix="+"
                                    />
                                </h3>
                                <p className="text-sm text-gray-400">Projets</p>
                            </div>
                        </div>

                        {/* BUTTON */}
                        <div
                            className="flex
                     justify-center"
                        >
                            <a
                                href="/cv-loicassogba.pdf"
                                download
                                className="inline-block  bg-orange-400 text-black px-5 py-3 rounded-md font-semibold hover:bg-orange-500 active:scale-95 transition"
                            >
                                Télécharger mon CV
                            </a>
                        </div>
                    </div>

                    {/* RIGHT - PREVIEW */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                        viewport={{ once: false }}
                        className="relative group animate-fade-in"
                    >
                        {/* CV IMAGE */}
                        <div className="overflow-hidden rounded-xl border border-white/10 shadow-lg">
                            <img
                                src="/cv1.jpg"
                                alt="CV Preview"
                                className="w-full object-cover group-hover:scale-105 transition duration-500"
                            />
                        </div>

                        {/* BADGE */}
                        <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-orange-400/10 text-orange-400 border border-orange-400/30">
                            PDF
                        </span>
                    </motion.div>
                </motion.div>
            </article>
        </motion.section>
    );
}
