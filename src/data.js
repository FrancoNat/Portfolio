import img from './assets/Apprecetas.gif';
import cinegoi from './assets/cineGo.png';

const projects = [
 {
    id: 1,
    title: "Recetas App",
    subtitle: "Proyecto individual de Henry",
    description:
      "Desarrollé una aplicación web que permite buscar y crear recetas. Utilicé una API externa para obtener recetas y una base de datos para almacenar las recetas creadas. Las tecnologías que utilicé incluyen HTML, CSS, JavaScript, ReactJS, Redux, Express, Node.js y posgreSQL. El resultado es una aplicación web interactiva y eficiente para explorar y crear deliciosas recetas",
    image: img,
    link: "https://github.com/FrancoNat/Proyecto-Food",
  },
  {
    id: 2,
    title: "CineGo",
    subtitle: "Proyecto Final de Henry",
    description: "Para el proyecto final de Henry con mi grupo de compañeros  desarrollamos CineGo, una aplicación web para administrar, vender y comprar candy, entradas de cine y suscripciones. Integramos MercadoPago como medio de pago seguro. CineGo cuenta con un catálogo de películas, gestión de candy, compra de entradas y suscripciones. También incluye perfiles de usuario, integración con MercadoPago y un sistema de calificaciones. Para más detalles, visita el enlace o mi perfil de LinkedIn.",
    image: cinegoi,
    link: "https://cine-go-ten.vercel.app/",
  }
] 

export default projects;