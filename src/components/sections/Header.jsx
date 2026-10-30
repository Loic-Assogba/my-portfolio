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

    // Fermer le menu
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Détection du défilement
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Fermer le menu avec Échap
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

    // Bloquer le défilement de la page derrière le menu
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
                    w-full max-w-full
                    transition-colors duration-300
                    ${
                        isScrolled
                            ? 'bg-gray-950/95 backdrop-blur-xl shadow-lg border-b border-white/10'
                            : 'bg-gray-950/80 backdrop-blur-md'
                    }
                `}
            >
                <div
                    className="
                        mx-auto flex h-16 w-full max-w-6xl
                        items-center justify-between gap-4
                        px-4 sm:h-[72px] sm:px-6 lg:px-8
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
                                whitespace-nowrap
                                font-clash font-bold
                                text-lg sm:text-xl
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
                                            block whitespace-nowrap
                                            rounded-lg px-3 py-2
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
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label={
                            isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'
                        }
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
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* ================= MENU MOBILE ================= */}

            {isMenuOpen && (
                <>
                    {/* FOND TRANSPARENT */}

                    <div
                        className="
                            fixed inset-0 z-40
                            lg:hidden
                        "
                        onClick={closeMenu}
                        aria-hidden="true"
                    />

                    {/* PANNEAU DU MENU */}

                    <nav
                        id="mobile-navigation"
                        aria-label="Navigation mobile"
                        className="
                            fixed right-3 top-[72px] z-[60]
                            w-[min(18rem,calc(100vw-1.5rem))]
                            h-auto max-h-[calc(100dvh-88px)]
                            overflow-y-auto overflow-x-hidden
                            rounded-2xl
                            border border-white/10
                            bg-gray-950 text-white
                            shadow-2xl
                            p-4
                            lg:hidden
                            animate-slide-in
                        "
                    >
                        {/* EN-TÊTE DU MENU */}

                        <div
                            className="
                                flex items-center justify-between
                                gap-3 mb-4
                            "
                        >
                            <span
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
                            </span>

                            <button
                                type="button"
                                onClick={closeMenu}
                                aria-label="Fermer le menu"
                                className="
                                    shrink-0
                                    flex items-center justify-center
                                    w-9 h-9 rounded-lg
                                    text-white
                                    hover:bg-white/10
                                    hover:text-orange-400
                                    transition-all duration-200
                                "
                            >
                                <X size={21} />
                            </button>
                        </div>

                        {/* LIENS DE NAVIGATION */}

                        <ul className="flex flex-col gap-1 font-satoshi">
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
                                            min-h-11 px-4 py-3
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

                        <div className="mt-3 pt-3 border-t border-white/10 px-4">
                            <p className="text-xs text-gray-500">
                                Portfolio de Loïc Assogba
                            </p>

                            <p className="mt-1 text-sm text-orange-400">
                                Développeur Web Full-Stack
                            </p>
                        </div>
                    </nav>
                </>
            )}
        </>
    );
}
