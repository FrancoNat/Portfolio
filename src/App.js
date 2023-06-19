import './App.css';
import './index.css'
import { Navbar, About, Projects, Skills, Testimonials, Contact } from './Componentes/index'

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font" >
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
