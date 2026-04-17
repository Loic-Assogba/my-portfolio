export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white mt-20 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* TOP */}
                <div className="grid md:grid-cols-3 gap-10 items-start">
                    {/* BRAND */}
                    <div className="space-y-3 animate-fade-in">
                        <h2 className="font-clash text-2xl font-bold">
                            Loïc Assogba
                        </h2>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Développeur Web Full Stack passionné par la création
                            d'expériences modernes et performantes.
                        </p>
                    </div>

                    <div></div>

                    {/* SOCIAL */}
                    <div className="space-y-3">
                        <h3 className="text-sm text-orange-400 font-semibold">
                            Réseaux Sociaux
                        </h3>

                        <div className="flex gap-3 flex-wrap">
                            <a
                                href="https://github.com/Loic-Assogba"
                                className="p-2 rounded-md bg-gray-900 text-sm hover:bg-gray-400/10 hover:text-orange-400 transition active:scale-95"
                            >
                                <img
                                    src="/github.png"
                                    alt="GitHub"
                                    className="w-2/3"
                                />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/ksm-undefined-25b7993ab"
                                className="p-2 rounded-md bg-gray-900 text-sm hover:bg-blue-400/10 hover:text-orange-400 transition active:scale-95"
                            >
                                <img
                                    src="/linkedin.png"
                                    alt="LinkedIn"
                                    className="w-2/3"
                                />
                            </a>

                            <a
                                href="https://wa.me/22967566687"
                                className="p-2 rounded-md bg-gray-900 text-sm hover:bg-green-400/10 hover:text-orange-400 transition active:scale-95"
                            >
                                <img
                                    src="/whatsapp.png"
                                    alt="WhatsApp"
                                    className="w-2/3"
                                />
                            </a>

                            <a
                                href="https://www.facebook.com/loic.assogba.71"
                                className="p-2 rounded-md bg-gray-900 text-sm hover:bg-blue-400/10 hover:text-orange-400 transition active:scale-95"
                            >
                                <img
                                    src="/facebook.png"
                                    alt="Facebook"
                                    className="w-2/3"
                                />
                            </a>

                            <a
                                href="https://www.tiktok.com/@ksm__08"
                                className="p-2 rounded-md bg-gray-900 text-sm hover:bg-black/10 hover:text-orange-400 transition active:scale-95"
                            >
                                <img
                                    src="/tik-tok.png"
                                    alt="TikTok"
                                    className="w-2/3"
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/loic_assogba/"
                                className="p-2 rounded-md bg-gray-900 text-sm hover:bg-pink-400/10 hover:text-orange-400 transition active:scale-95"
                            >
                                <img
                                    src="/instagram.png"
                                    alt="Instagram"
                                    className="w-2/3"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="my-10 border-t border-white/10"></div>

                {/* BOTTOM */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <p>
                        © {new Date().getFullYear()} Loïc Assogba. Tous droits
                        réservés.
                    </p>

                    <p className="hover:text-orange-400 transition cursor-default">
                        Made with React & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
}
