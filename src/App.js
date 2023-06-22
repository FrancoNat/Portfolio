import './App.css';
import './index.css'
import { Navbar, About, Projects, Skills, Contact, ChatBot } from './Componentes/index'
// import { Chatbot } from 'react-chatbot-kit';
// import config from './chatbotConfig';
// import MessageParser from './chatbot/MessageParser';
// import ActionProvider from './chatbot/ActionProvider';


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font" >
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <ChatBot />
    </main>
  );
}

export default App;
     
