import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { createPortal } from 'react-dom';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const links = [
        { name: 'Accueil', href: '#hero' },
        { name: 'À propos', href: '#a_propos' },
        { name: 'Projets', href: '#projets' },
        { name: 'CV', href: '#cv' },
        { name: 'Contact', href: '#contact' },
    ];

    // Gestion du scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fermeture avec la touche Échap
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscape);

        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    // Empêcher le scroll derrière le menu
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        <>
            {/* ================= MOBILE HEADER ================= */}

            <header
                className={`flex items-center justify-between mt-3 mx-2 rounded-xl text-white px-5 py-3 lg:hidden sticky top-0 z-40 transition-all duration-500
                ${
                    isScrolled
                        ? 'bg-gray-950/25 backdrop-blur-xl border border-white/10 rounded-2xl m-2 shadow-xl'
                        : 'bg-gray-950/20 backdrop-blur-md border-b border-white/5'
                }`}
            >
                <a
                    href="#hero"
                    className="transition-transform duration-300 hover:scale-[1.03]"
                >
                    <h1 className="font-clash font-bold text-xl relative group">
                        <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                            Loïc Assogba
                        </span>

                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full" />
                    </h1>
                </a>

                <button
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Ouvrir le menu"
                    className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-orange-400/10 hover:border-orange-400/30 transition-all duration-300 active:scale-90"
                >
                    <Menu className="w-5 h-5 text-gray-200" />
                </button>
            </header>

            {/* ================= MOBILE MENU ================= */}

            {isMenuOpen &&
                createPortal(
                    <div
                        className="fixed inset-0 z-[9999] lg:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {/* Fond transparent */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

                        {/* Menu */}
                        <nav
                            onClick={(e) => e.stopPropagation()}
                            className="absolute top-4 right-4 w-[min(300px,calc(100vw-32px))] h-fit max-h-[calc(100dvh-32px)] overflow-y-auto rounded-2xl bg-gray-950/95 backdrop-blur-2xl text-white p-5 shadow-2xl border border-white/10 animate-slide-in"
                        >
                            {/* En-tête du menu */}
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                <div>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Navigation
                                    </p>
                                </div>

                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    aria-label="Fermer le menu"
                                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-orange-400/10 hover:text-orange-400 hover:border-orange-400/30 transition-all duration-300"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Liens */}
                            <ul className="space-y-2 font-satoshi">
                                {links.map((item, i) => (
                                    <li key={i}>
                                        <a
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="group flex items-center justify-between px-4 py-3.5 rounded-xl text-sm text-gray-300 border border-transparent transition-all duration-300 hover:bg-orange-400/10 hover:text-orange-400 hover:border-orange-400/10 active:scale-[0.97]"
                                        >
                                            <span className="font-medium">
                                                {item.name}
                                            </span>

                                            <span className="text-xs tracking-wider text-gray-600 group-hover:text-orange-400 transition-colors">
                                                0{i + 1}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            {/* Pied du menu */}
                            <div className="mt-5 pt-4 border-t border-white/10">
                                <p className="text-sm font-semibold text-white">
                                    Loïc Assogba
                                </p>

                                <p className="text-xs text-orange-400 mt-1">
                                    Développeur Web Full-Stack
                                </p>

                                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    Disponible pour de nouvelles opportunités
                                </div>
                            </div>
                        </nav>
                    </div>,
                    document.body
                )}

            {/* ================= DESKTOP HEADER ================= */}

            <header
                className={`hidden lg:flex items-center justify-between py-4 px-7 mt-3 text-white max-w-6xl mx-auto sticky top-0 z-40 transition-all duration-500
                ${
                    isScrolled
                        ? 'bg-gray-950/25 backdrop-blur-xl rounded-2xl mt-3 shadow-xl border border-white/10'
                        : 'bg-gray-950/20 backdrop-blur-md rounded-2xl border border-white/5'
                }`}
            >
                {/* Logo */}
                <a
                    href="#hero"
                    className="transition-transform duration-300 hover:scale-[1.03]"
                >
                    <h1 className="font-clash font-bold text-xl relative group">
                        <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                            Loïc Assogba
                        </span>

                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full" />
                    </h1>
                </a>

                {/* Navigation */}
                <nav>
                    <ul className="flex items-center gap-x-2 text-sm font-satoshi">
                        {links.map((item, i) => (
                            <li key={i}>
                                <a
                                    href={item.href}
                                    className="group relative flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-gray-300 transition-all duration-300 hover:text-orange-400 hover:bg-orange-400/10 active:scale-95"
                                >
                                    {item.name}

                                    <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Petit indicateur */}
                <a
                    href="#contact"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-400 text-gray-950 text-sm font-semibold hover:bg-orange-300 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                >
                    Me contacter
                    <ArrowUpRight size={16} />
                </a>
            </header>
        </>
    );
}
