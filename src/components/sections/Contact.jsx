import Button from '../ui/Button';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            id="contact"
            className="max-w-6xl mx-auto px-4 pb-4 pt-20 sm:px-6 lg:px-8 py-16 lg:py-24 text-white"
        >
            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl text-center font-clash font-bold mb-12 animate-fade-in">
                Contactez
                <span className="inline-block text-orange-400 animate-float">
                    -moi
                </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* LEFT INFO */}
                <div className="space-y-6 animate-slide-in text-center lg:text-left">
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                        Vous avez un projet, une idée ou une opportunité ? Je
                        suis disponible pour collaborer.
                    </p>

                    <div className="space-y-2 text-sm text-gray-400">
                        <p> email : loicassogba7@gmail.com</p>
                        <p> localisation : Bénin</p>
                        <p> disponibilité : freelance / stage</p>
                    </div>

                    {/* SOCIAL BUTTONS */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                        <a
                            href="https://wa.me/22967566687"
                            className="px-4 py-2 text-sm rounded-md border border-orange-400/20 bg-gray-900 hover:bg-green-400/10 hover:text-green-400 transition active:scale-95"
                        >
                            WhatsApp
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ksm-undefined-25b7993ab"
                            className="px-4 py-2 text-sm rounded-md border border-orange-400/20 bg-gray-900 hover:bg-blue-400/10 hover:text-blue-400 transition active:scale-95"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/Loic-Assogba"
                            className="px-4 py-2 text-sm rounded-md border border-orange-400/20 bg-gray-900 hover:bg-gray-400/10 hover:text-gray-400 transition active:scale-95"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                {/* RIGHT FORM */}
                <form
                    className="space-y-4 animate-fade-in w-full"
                    onSubmit={(e) => {
                        e.preventDefault();

                        const name = e.target.name.value;
                        const email = e.target.email.value;
                        const message = e.target.message.value;

                        const phoneNumber = '22967566687';

                        const text = `Bonjour 👋%0A%0A👤 Nom: ${name}%0A📧 Email: ${email}%0A%0A💬 Message:%0A${message}`;

                        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

                        window.open(url, '_blank');
                    }}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Votre nom"
                        required
                        className="w-full p-3 sm:p-4 rounded-md bg-gray-900 border border-white/10 text-white placeholder-gray-500 focus:border-orange-400 outline-none transition"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Votre email"
                        required
                        className="w-full p-3 sm:p-4 rounded-md bg-gray-900 border border-white/10 text-white placeholder-gray-500 focus:border-orange-400 outline-none transition"
                    />

                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Votre message"
                        required
                        className="w-full p-3 sm:p-4 rounded-md bg-gray-900 border border-white/10 text-white placeholder-gray-500 focus:border-orange-400 outline-none transition resize-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-orange-400 text-black font-semibold py-3 rounded-md hover:bg-orange-500 active:scale-95 transition transform text-sm sm:text-base"
                    >
                        Envoyer sur WhatsApp
                    </button>
                </form>
            </div>
        </motion.section>
    );
}
