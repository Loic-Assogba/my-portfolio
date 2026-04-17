export default function CV() {
    return (
        <section className="bg-gray-950">
            <article className="max-w-6xl mx-auto px-6 py-10 text-white">
                {/* TITLE */}
                <h2 className="text-3xl text-center md:text-4xl font-clash font-bold mb-10 animate-fade-in">
                    Mon{' '}
                    <span className="inline-block text-orange-400 animate-float">
                        CV
                    </span>
                </h2>

                {/* CONTAINER */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* LEFT - INFO */}
                    <div className="space-y-6 animate-slide-in">
                        <p className="text-gray-400 leading-relaxed text-center">
                            Découvrez mon parcours, mes compétences et mes
                            expériences en développement web.
                        </p>

                        {/* STATS */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-900 p-5 rounded-xl text-center hover:scale-105 transition">
                                <h3 className="text-orange-400 text-2xl font-bold">
                                    1+
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Année d'expérience
                                </p>
                            </div>

                            <div className="bg-gray-900 p-5 rounded-xl text-center hover:scale-105 transition">
                                <h3 className="text-orange-400 text-2xl font-bold">
                                    10+
                                </h3>
                                <p className="text-sm text-gray-400">Projets</p>
                            </div>
                        </div>

                        {/* BUTTON */}
                        <div
                            className="flex
                     justify-center"
                        >
                            <a
                                href="/cv.pdf"
                                download
                                className="inline-block  bg-orange-400 text-black px-5 py-3 rounded-md font-semibold hover:bg-orange-500 active:scale-95 transition"
                            >
                                Télécharger mon CV
                            </a>
                        </div>
                    </div>

                    {/* RIGHT - PREVIEW */}
                    <div className="relative group animate-fade-in">
                        {/* CV IMAGE */}
                        <div className="overflow-hidden rounded-xl border border-white/10 shadow-lg">
                            <img
                                src="/cv1.jpg"
                                alt="CV Preview"
                                className="w-full object-cover group-hover:scale-105 transition duration-500"
                            />
                        </div>

                        {/* BADGE */}
                        <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-orange-400/10 text-orange-400 border border-orange-400/30">
                            PDF
                        </span>
                    </div>
                </div>
            </article>
        </section>
    );
}
