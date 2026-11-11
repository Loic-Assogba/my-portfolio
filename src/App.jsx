import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import AllProjects from './pages/AllProjects';

import Welcome from './components/sections/Welcome';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import A_propos from './components/sections/A_propos';
import Projects from './components/sections/Projects';
import Cv from './components/sections/Cv';
import Contact from './components/sections/Contact';
import Collaboration from './components/sections/Collaboration';
import Footer from './components/sections/Footer';

function Home() {
    return (
        <>
            <Hero />
            <Skills />
            <A_propos />
            <Projects />
            <Cv />
            <Contact />
            <Collaboration />
        </>
    );
}

function App() {
    const [loading, setLoading] = useState(true);
    const [showApp, setShowApp] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setShowApp(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Welcome />;
    }

    return (
        <>
            {/* BACKGROUND GLOBAL */}
            <div className="fixed inset-0 -z-10">
                <img
                    src="/background.jpeg"
                    alt="Loïc Assogba"
                    className="hidden lg:block absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* IMAGE MOBILE */}
                <img
                    src="/background-mobile.jpeg"
                    alt="Loïc Assogba"
                    className="block lg:hidden absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* FILTRE SOMBRE */}
                <div className="absolute inset-0 bg-gray-950/75"></div>

                {/* NUANCE ORANGE */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-black/40"></div>
            </div>

            <div
                className={`relative z-0 font-montserrat transition-all duration-1000 ease-out ${
                    showApp
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-5'
                }`}
            >
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tous-les-projets" element={<AllProjects />} />
                </Routes>

                <Footer />
            </div>
        </>
    );
}

export default App;
