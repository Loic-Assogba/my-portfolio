import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* ================= MOBILE HEADER ================= */}
            <header className="flex items-center justify-between bg-gray-950 text-white p-4 lg:hidden">
                <a
                    href="/"
                    className="transition-transform duration-300 hover:scale-[1.03]"
                >
                    <h1 className="font-clash font-bold text-lg relative group">
                        <span className="inline-block bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent animate-glow">
                            Loïc Assogba
                        </span>

                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                    </h1>
                </a>

                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="p-2 rounded-md hover:bg-gray-800 transition transform active:scale-90"
                >
                    <Menu className="w-5 h-5" />
                </button>
            </header>

            {/* ================= MOBILE MENU OVERLAY ================= */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
                    <nav className="absolute top-0 right-0 w-3/4 h-min m-2 rounded-2xl bg-gray-950 text-white p-6 shadow-2xl animate-slide-in">
                        {/* Close button */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className=" flex mb-8 p-2 rounded-md hover:bg-gray-800 transition transform active:scale-95 hover:scale-105"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <ul className="space-y-6 text-sm font-satoshi">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-orange-400 transition duration-200 active:scale-95 hover:scale-105"
                                >
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/annonces"
                                    className="hover:text-orange-400 transition"
                                >
                                    À propos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="hover:text-orange-400 transition"
                                >
                                    Projets
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="hover:text-orange-400 transition"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}

            {/* ================= DESKTOP HEADER ================= */}
            <header className="hidden lg:flex items-center justify-between py-4 bg-gray-900 m-2 px-6 text-white max-w-6xl mx-auto">
                <a
                    href="/"
                    className="transition-transform duration-300 hover:scale-[1.03]"
                >
                    <h1 className="font-clash font-bold text-xl relative group">
                        <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                            Loïc Assogba
                        </span>

                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
                    </h1>
                </a>

                <nav>
                    <ul className="flex items-center gap-x-6 text-sm font-satoshi">
                        <li>
                            <a
                                href="/"
                                className="hover:text-orange-400 transition"
                            >
                                Accueil
                            </a>
                        </li>
                        <li>
                            <a
                                href="/annonces"
                                className="hover:text-orange-400 transition"
                            >
                                À propos
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="hover:text-orange-400 transition"
                            >
                                Projets
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="hover:text-orange-400 transition"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
