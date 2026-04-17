import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import A_propos from './components/sections/A_propos';
import Projects from './components/sections/Projects';
import Cv from './components/sections/Cv';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
    return (
        <main className="font-montserrat">
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
