import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    const links = [
        { name: 'Accueil', href: '#hero' },
        { name: 'À propos', href: '#a_propos' },
        { name: 'Projets', href: '#projets' },
        { name: 'CV', href: '#cv' },
        { name: 'Contact', href: '#contact' },
    ];

    // Fermer le menu
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Détection du sens de défilement
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = Math.max(0, window.scrollY);
            const difference = currentScrollY - lastScrollY;

            // Modifier l'apparence du header
            setIsScrolled(currentScrollY > 20);

            // Toujours afficher le header en haut de la page
            if (currentScrollY <= 20) {
                setIsHeaderVisible(true);
            } else if (difference > 0) {
                // Défilement vers le bas
                setIsHeaderVisible(false);
            } else if (difference < 0) {
                // Défilement vers le haut
                setIsHeaderVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Fermer le menu avec la touche Échap
    useEffect(() => {
        if (!isMenuOpen) return;

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                closeMenu();
            }
        };

        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isMenuOpen]);

    // Bloquer le défilement derrière le menu mobile
    useEffect(() => {
        if (!isMenuOpen) return;

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isMenuOpen]);

    return (
        <>
            {/* ================= HEADER PRINCIPAL ================= */}

            <header
                className={`
                    fixed inset-x-0 top-0 z-50
                    w-full
                    transition-all duration-300 ease-in-out
                    ${
                        isHeaderVisible || isMenuOpen
                            ? 'translate-y-0 opacity-100 pointer-events-auto'
                            : '-translate-y-full opacity-0 pointer-events-none'
                    }
                    ${
                        isScrolled
                            ? 'bg-gray-950/95 backdrop-blur-xl shadow-lg border-b border-white/10'
                            : 'bg-gray-950/80 backdrop-blur-md'
                    }
                `}
            >
                <div
                    className="
                        mx-auto w-full max-w-6xl
                        flex items-center justify-between
                        gap-4
                        px-4 sm:px-6 lg:px-8
                        h-16 sm:h-[72px]
                    "
                >
                    {/* LOGO */}

                    <a
                        href="#hero"
                        onClick={closeMenu}
                        aria-label="Loïc Assogba - Accueil"
                        className="group relative shrink-0"
                    >
                        <span
                            className="
                                font-clash font-bold
                                text-lg sm:text-xl
                                whitespace-nowrap
                                bg-gradient-to-r
                                from-orange-400 via-orange-300 to-orange-500
                                bg-clip-text text-transparent
                                shine
                            "
                        >
                            Loïc Assogba
                        </span>

                        <span
                            className="
                                absolute left-0 -bottom-1
                                h-[2px] w-0
                                bg-orange-400
                                transition-all duration-300
                                group-hover:w-full
                            "
                        />
                    </a>

                    {/* NAVIGATION DESKTOP */}

                    <nav
                        className="hidden lg:block"
                        aria-label="Navigation principale"
                    >
                        <ul
                            className="
                                flex items-center
                                gap-x-2 xl:gap-x-4
                                text-sm font-satoshi
                            "
                        >
                            {links.map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="
                                            block px-3 py-2 rounded-lg
                                            whitespace-nowrap
                                            transition-all duration-200
                                            hover:bg-orange-400/10
                                            hover:text-orange-400
                                            active:scale-95
                                        "
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* BOUTON MENU MOBILE */}

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Ouvrir le menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        className="
                            lg:hidden shrink-0
                            flex items-center justify-center
                            w-11 h-11 rounded-xl
                            text-white
                            hover:bg-white/10
                            active:scale-95
                            transition-all duration-200
                        "
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            {/* ================= MENU MOBILE ================= */}

            {isMenuOpen && (
                <div
                    className="
                        fixed inset-0 z-[60]
                        lg:hidden
                        w-full
                        bg-black/70 backdrop-blur-sm
                    "
                    onClick={closeMenu}
                >
                    <nav
                        id="mobile-navigation"
                        aria-label="Navigation mobile"
                        className="
                            absolute inset-y-0 right-0
                            w-[85%] max-w-[360px]
                            overflow-y-auto overflow-x-hidden
                            bg-gray-950 text-white
                            border-l border-white/10
                            shadow-2xl
                            p-5 sm:p-7
                            animate-slide-in
                        "
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* EN-TÊTE DU MENU */}

                        <div className="flex items-center justify-between gap-3 mb-10">
                            <a
                                href="#hero"
                                onClick={closeMenu}
                                className="
                                    min-w-0
                                    font-clash font-bold text-lg
                                    whitespace-nowrap
                                    bg-gradient-to-r
                                    from-orange-400 via-orange-300 to-orange-500
                                    bg-clip-text text-transparent
                                "
                            >
                                Loïc Assogba
                            </a>

                            <button
                                type="button"
                                onClick={closeMenu}
                                aria-label="Fermer le menu"
                                className="
                                    shrink-0
                                    flex items-center justify-center
                                    w-11 h-11 rounded-xl
                                    text-white
                                    hover:bg-white/10
                                    hover:text-orange-400
                                    active:scale-95
                                    transition-all duration-200
                                "
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* LIENS DE NAVIGATION */}

                        <ul className="flex flex-col gap-3 font-satoshi">
                            {links.map((item, index) => (
                                <li
                                    key={item.href}
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                    }}
                                    className="animate-slide-in"
                                >
                                    <a
                                        href={item.href}
                                        onClick={closeMenu}
                                        className="
                                            flex items-center
                                            min-h-12 px-4 py-3
                                            rounded-xl
                                            text-base text-gray-200
                                            transition-all duration-200
                                            hover:bg-orange-400/10
                                            hover:text-orange-400
                                            active:scale-[0.98]
                                        "
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* PIED DU MENU */}

                        <div className="mt-10 pt-6 border-t border-white/10">
                            <p className="text-xs text-gray-500">
                                Portfolio de Loïc Assogba
                            </p>

                            <p className="mt-2 text-sm text-orange-400">
                                Développeur Web Full-Stack
                            </p>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}
