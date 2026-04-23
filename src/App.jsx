import { useEffect, useState } from 'react';

import Welcome from './components/sections/Welcome';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import A_propos from './components/sections/A_propos';
import Projects from './components/sections/Projects';
import Cv from './components/sections/Cv';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
    const [loading, setLoading] = useState(true);
    const [showApp, setShowApp] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);

            // petit délai pour déclencher animation propre
            setTimeout(() => {
                setShowApp(true);
            }, 100);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Welcome />;
    }

    return (
        <main
            className={`font-montserrat transition-all duration-1000 ease-out ${
                showApp
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
            }`}
        >
            <Header />
            <Hero />
            <A_propos />
            <Projects />
            <Cv />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
