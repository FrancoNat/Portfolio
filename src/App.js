import './App.css';
import './index.css'
import { Navbar, About, Projects, Skills, Contact } from './Componentes/index'

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font" >
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
     
