import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* ================= MOBILE HEADER ================= */}

            <header
                className={`flex items-center justify-between text-white p-4 lg:hidden transition-all duration-300 sticky top-0 z-40
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
                        <a href="#hero">
                            <span className="inline-block bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 bg-clip-text text-transparent shine">
                                Loïc Assogba
                            </span>
                        </a>

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

            {/* ================= MOBILE MENU ================= */}

            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
                    <nav className="absolute top-0 right-0 w-3/4 h-min m-2 rounded-2xl bg-gray-950 text-white p-6 shadow-2xl animate-slide-in">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="flex mb-8 p-2 rounded-md hover:bg-gray-800 transition transform active:scale-95"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <ul className="space-y-6 text-sm font-satoshi">
                            {links.map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block px-3 py-2 rounded-md transition-all duration-150 hover:bg-orange-400/10 hover:text-orange-400 active:scale-90 active:bg-orange-400/20"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
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
