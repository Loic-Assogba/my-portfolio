import { useEffect, useState } from 'react';

export default function Welcome() {
    const text = '</ Loïc Assogba >';
    const [displayText, setDisplayText] = useState('');
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);

        let index = 0;

        const interval = setInterval(() => {
            setDisplayText(text.slice(0, index + 1));
            index++;

            if (index > text.length) {
                clearInterval(interval);
            }
        }, 80);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className={`h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 px-4 transition-all duration-1000 ease-out
            ${visible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm translate-y-4'}
            `}
        >
            {/* BARRE DE CHARGEMENT (au-dessus) */}
            <div className="w-40 sm:w-60 md:w-72 h-1.5 bg-gray-800 rounded overflow-hidden mb-8 relative">
                <div className="light-bar"></div>
            </div>

            {/* TEXTE ANIMÉ */}
            <h1 className="font-clash text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide text-center leading-tight shine">
                {displayText}
                <span className="animate-pulse">|</span>
            </h1>

            {/* SOUS-TEXTE */}
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-4 text-center">
                Dev Full Stack • React • UI moderne
            </p>
        </div>
    );
}
