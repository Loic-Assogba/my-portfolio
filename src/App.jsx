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
import Footer from './components/sections/Footer';

function Home() {
    return (
        <>
            {' '}
            <Hero />
            <Skills />
            <A_propos /> <Projects /> <Cv /> <Contact />
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
        <div
            className={`font-montserrat transition-all duration-1000 ease-out ${
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
    );
}

export default App;
