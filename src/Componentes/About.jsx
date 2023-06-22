import React from "react";
import imag from "../assets/coding.svg"

const About = () => {
   return(
    <section id = "about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                 ¡Hola! soy Franco Bogado, un apasionado desarrollador 
                 <br className="hidden lg:inline-block"/> 
                 <h1>Full Stack con experiencia</h1> en la creación de aplicaciones web completas. 
                </h1>
                <p className="mb-8 leading-relaxed">
                Mi enfoque se centra en utilizar tecnologías modernas como React, Redux, Node.js y Express para construir interfaces atractivas y dinámicas. Tengo un sólido conocimiento de HTML, JavaScript y CSS, lo que me permite dar vida a diseños elegantes y responsivos. Además, cuento con experiencia en el manejo de APIs externas, lo que me permite integrar servicios y datos de terceros de manera efectiva en mis proyectos. También poseo habilidades en el diseño de bases de datos utilizando PostgreSQL y en el desarrollo de API robustas y seguras. Mi objetivo es utilizar mis habilidades técnicas y mi capacidad de resolución de problemas para crear soluciones escalables y eficientes. Siempre estoy en busca de nuevos desafíos y oportunidades de aprendizaje para mantenerme actualizado en las últimas tendencias y mejores prácticas del desarrollo web. Estoy entusiasmado por formar parte de proyectos innovadores y colaborar en equipos multidisciplinarios para brindar resultados excepcionales a los usuarios finales.
                </p>
                <div className="flex justify-center">
                    <a 
                    href="#contact"
                    className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Contáctame
                    </a>
                    <a 
                    href="#projects"
                    className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        Mis proyectos    
                    </a>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
               <img 
               className="object-cover object-center rounded"
               alt="hero"  
               src={ imag }
               />
            </div>             
        </div>
    </section>
   );
};
                
export default About


