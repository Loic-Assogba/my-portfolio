import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import A_propos from './components/sections/A_propos';
import Projects from './components/sections/Projects';

function App() {
    return (
        <main className="font-montserrat">
            <Header />
            <Hero />
            <A_propos />
            <Projects />
        </main>
    );
}

export default App;
