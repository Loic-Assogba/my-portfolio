import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
                className={`relative flex items-center justify-between text-white p-4 lg:hidden transition-all duration-300 sticky top-0 z-40
                ${
                    isScrolled
                        ? 'bg-gray-950/80 backdrop-blur-md rounded-xl m-2 shadow-lg'
                        : 'bg-gray-950'
                }`}
            >
                <a
                    href="#hero"
                    className="transition-transform duration-300 hover:scale-[1.03]"
                >
                    <h1 className="font-clash font-bold text-lg relative group">
                        <span className="inline-block bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent shine">
                            Loïc Assogba
                        </span>

                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                    </h1>
                </a>

                <button
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Ouvrir le menu"
                    className="p-2 rounded-md hover:bg-gray-800 transition transform active:scale-90"
                >
                    <Menu className="w-5 h-5" />
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
                        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

                        {/* Menu */}
                        <nav
                            onClick={(e) => e.stopPropagation()}
                            className="absolute top-4 right-4 w-[min(280px,calc(100vw-32px))] h-fit max-h-[calc(100dvh-32px)] overflow-y-auto rounded-2xl bg-gray-950 text-white p-4 shadow-2xl border border-white/10 animate-slide-in"
                        >
                            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                                <div>
                                    <p className="text-xs text-gray-400 font-satoshi">
                                        Navigation
                                    </p>
                                </div>

                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 rounded-lg bg-gray-800/70 hover:bg-orange-400/20 hover:text-orange-400 transition-all duration-300"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <ul className="space-y-1 font-satoshi">
                                {links.map((item, i) => (
                                    <li key={i}>
                                        <a
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="group flex items-center justify-between px-3 py-3 rounded-xl text-sm text-gray-300 transition-all duration-300 hover:bg-orange-400/10 hover:text-orange-400 active:scale-[0.97]"
                                        >
                                            <span>{item.name}</span>

                                            <span className="text-xs text-gray-600 group-hover:text-orange-400">
                                                0{i + 1}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-3 pt-3 border-t border-white/10 px-4">
                                <p className="text-xs text-gray-500">
                                    Loïc Assogba
                                </p>

                                <p className="mt-1 text-sm text-orange-400">
                                    Développeur Web Full-Stack
                                </p>
                            </div>
                        </nav>
                    </div>,
                    document.body
                )}

            {/* ================= DESKTOP HEADER ================= */}

            <header
                className={`hidden lg:flex items-center justify-between py-4 px-6 text-white max-w-6xl mx-auto sticky top-0 z-40 transition-all duration-300
                ${
                    isScrolled
                        ? 'bg-gray-900/80 backdrop-blur-md rounded-2xl mt-3 shadow-xl border border-white/10'
                        : 'bg-gray-900'
                }`}
            >
                <a
                    href="#hero"
                    className="transition-transform duration-300 hover:scale-[1.03]"
                >
                    <h1 className="font-clash font-bold text-xl relative group">
                        <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent shine">
                            Loïc Assogba
                        </span>

                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                    </h1>
                </a>

                <nav>
                    <ul className="flex items-center gap-x-6 text-sm font-satoshi">
                        {links.map((item, i) => (
                            <li key={i}>
                                <a
                                    href={item.href}
                                    className="px-3 py-2 rounded-md transition-all duration-150 transform hover:bg-orange-400/10 hover:-translate-y-1 hover:text-orange-400 active:scale-90 active:bg-orange-400/20"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    );
}
