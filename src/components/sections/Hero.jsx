import Button from '../ui/Button';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="min-h-[90vh] flex items-center">
            <article className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto p-4 lg:p-8">
                {/* TEXTE */}
                <div className="lg:w-1/2 font-clash text-4xl lg:text-6xl text-center lg:text-left">
                    <h1 className="p-2">
                        Bonjour{' '}
                        <span className="inline-block text-orange-400 animate-float">
                            .
                        </span>
                    </h1>

                    <p className="text-2xl p-3">
                        Je suis{' '}
                        <span className="border-b-2 font-medium border-orange-400 pb-1 whitespace-nowrap">
                            Loïc Assogba
                        </span>
                    </p>

                    <h2 className="text-3xl text-gray-300 p-2">
                        Développeur Web Full Stack
                    </h2>

                    <div className="flex justify-center lg:justify-start gap-4 p-4">
                        <button className="bg-orange-400 text-white text-sm px-4 py-2 rounded-md button-click font-medium hover:bg-orange-500 transition hover">
                            Mes projets
                        </button>

                        <button className="border border-orange-400 text-orange-400 text-sm px-4 py-2 rounded-md button-click font-medium hover:bg-orange-400/10 hover:text-orange-400 transition hover">
                            Mon CV
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
                    {/* halo animé */}
                    <div className="absolute w-72 h-72 bg-orange-400/30 rounded-full blur-3xl animate-pulse"></div>

                    {/* image */}
                    <img
                        src="/profile.jpg"
                        alt="Profil"
                        className="relative w-64 h-80 object-cover rounded-full border-4 border-orange-400 lg:w-80 lg:h-96"
                    />
                </div>{' '}
            </article>
        </section>
    );
}
