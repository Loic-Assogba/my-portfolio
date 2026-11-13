import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    ArrowUp,
    Code2,
    Heart,
    Mail,
    MapPin,
} from 'lucide-react';

export default function Footer() {
    const socialLinks = [
        {
            name: 'GitHub',
            image: '/github.png',
            link: 'https://github.com/Loic-Assogba',
        },
        {
            name: 'LinkedIn',
            image: '/linkedin.png',
            link: 'https://www.linkedin.com/in/ksm-undefined-25b7993ab',
        },
        {
            name: 'WhatsApp',
            image: '/whatsapp.png',
            link: 'https://wa.me/22967566687',
        },
        {
            name: 'Facebook',
            image: '/facebook.png',
            link: 'https://www.facebook.com/loic.assogba.71',
        },
        {
            name: 'TikTok',
            image: '/tik-tok.png',
            link: 'https://www.tiktok.com/@ksm__08',
        },
        {
            name: 'Instagram',
            image: '/instagram.png',
            link: 'https://www.instagram.com/loic_assogba/',
        },
    ];

    const navigation = [
        { name: 'Accueil', link: '/#accueil' },
        { name: 'À propos', link: '/#apropos' },
        { name: 'Mes projets', link: '/#projets' },
        { name: 'Contact', link: '/#contact' },
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="relative bg-gray-950 text-white mt-20 overflow-hidden border-t border-white/10">
            {/* DÉCORATIONS */}
            <div className="absolute -top-32 left-1/4 w-80 h-80 bg-orange-400/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-400/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
                {/* PARTIE SUPÉRIEURE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16 lg:py-20">
                    {/* IDENTITÉ */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <a
                            href="/"
                            className="inline-flex items-center gap-2 group"
                        >
                            <span className="text-3xl font-bold font-clash">
                                Loïc ASSOGBA
                            </span>
                        </a>

                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
                            Développeur Web Full-Stack en formation. Je conçois
                            des expériences numériques modernes, intuitives et
                            performantes.
                        </p>

                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <MapPin size={16} className="text-orange-400" />
                            <span>Cotonou, Bénin</span>
                        </div>

                        <a
                            href="mailto:loicassogba7@gmail.com"
                            className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 transition-colors"
                        >
                            <Mail size={16} />
                            Me contacter
                            <ArrowUpRight size={15} />
                        </a>
                    </motion.div>

                    {/* NAVIGATION */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
                            Navigation
                        </h3>

                        <ul className="space-y-4">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.link}
                                        className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </a>
                                </li>
                            ))}

                            <li>
                                <a
                                    href="/tous-les-projets"
                                    className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors"
                                >
                                    <span className="w-1 h-1 rounded-full bg-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Tous les projets
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* RÉSEAUX SOCIAUX */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
                            Retrouvez-moi
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Restons connectés et échangeons autour du numérique
                            et de la technologie.
                        </p>

                        <div className="grid grid-cols-3 gap-3 max-w-[210px]">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    title={social.name}
                                    className="group flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-orange-400/10 hover:border-orange-400/40 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <img
                                        src={social.image}
                                        alt=""
                                        loading="lazy"
                                        className="w-5 h-5 object-contain opacity-70 group-hover:opacity-100 transition-all duration-300"
                                    />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* LIGNE DE SÉPARATION */}
                <div className="border-t border-white/10" />

                {/* PARTIE INFÉRIEURE */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-5 py-7">
                    <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
                        © {new Date().getFullYear()} Loïc Assogba. Tous droits
                        réservés.
                    </p>

                    <div className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm">
                        <Code2 size={15} className="text-orange-400" />
                        Développé avec React & Tailwind
                    </div>

                    <button
                        onClick={scrollToTop}
                        aria-label="Retour en haut"
                        className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 hover:text-orange-400 transition-colors group"
                    >
                        Retour en haut
                        <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-orange-400/10 group-hover:border-orange-400/40 transition-all">
                            <ArrowUp size={16} />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
