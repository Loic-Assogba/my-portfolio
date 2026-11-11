import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';

export default function Collaboration() {
    return (
        <section
            id="collaboration"
            className="relative min-h-[500px] flex items-center justify-center overflow-hidden px-6 py-24 m-4 rounded-2xl lg:m-20 border border-white/10 bg-gray-950/60 backdrop-blur-xl"
        >
            {/* Vidéo en arrière-plan */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/collaboration.mp4" type="video/mp4" />
            </video>

            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-gray-950/80" />

            {/* Contenu */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-3xl mx-auto text-center"
            >
                <span className="inline-block mb-6 px-4 py-2 rounded-full border border-orange-400/30 bg-orange-400/10 text-orange-400 text-sm font-medium">
                    Construisons quelque chose ensemble
                </span>

                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                    Une idée ?
                    <span className="block text-orange-400">
                        Construisons-la ensemble.
                    </span>
                </h2>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                    Je suis ouvert aux collaborations, aux projets innovants et
                    aux opportunités qui me permettront de mettre mes
                    compétences au service d'idées ambitieuses.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-orange-400 text-gray-950 font-semibold hover:bg-orange-300 transition duration-300"
                    >
                        Démarrer un projet
                        <ArrowUpRight size={20} />
                    </a>

                    <a
                        href="mailto:loicassogba7@gmail.com"
                        className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition duration-300"
                    >
                        Me contacter
                        <Mail size={19} />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
