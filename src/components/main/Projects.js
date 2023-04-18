import "../../styles/layout/Projects.scss";
import ListProjects from "./ListProjects";
import cocktail from "../../images/cocktails.jpg";
import harry from "../../images/harry.jpg";
import play from "../../images/juegonumber.jpg";
import lading from "../../images/landing.jpg";
const Projects = () => {
  return (
    <section className='list'>
      <ul className='list__ul'>
        <ListProjects
          title='Search Cocktails'
          img={cocktail}
          desc='La aplicación cuenta con una lista de bebidas y cócteles de todo el mundo proveniente de una API externa, además permite a los usuarios agregar sus cócteles favoritos a una sección personalizada.'
          tecno='HTML, SASS, JavaScript'
          url='https://celsrami.github.io/cocktail-search-celsrami/'
          git='https://github.com/celsrami/cocktail-search-celsrami'
        />
        <ListProjects
          title='Harry Potter character'
          img={harry}
          desc='La app realiza una petición a un API para obtener una lista de personajes de Harry Potter filtrados por la casa a la que pertenecen. También permite buscar por nombre y muestra la información completa al hacer click sobre un personaje.'
          tecno='HTML, SASS, JavaScript, React'
          url='https://celsrami.github.io/harry-potter-character-celsrami/'
          git='https://github.com/celsrami/harry-potter-character-celsrami'
        />
        <ListProjects
          title='Guess a random number'
          img={play}
          desc='El juego consiste en adivinar un número aleatorio entre 1 y 100, recibiendo pistas sobre si los intentos son demasiado altos o bajos, y contabilizando el número de intentos. Se debe recargar la página para jugar de nuevo.'
          tecno='HTML, SASS, JavaScript, React'
          url='https://celsrami.github.io/guess-a-number-celsrami/'
          git='https://github.com/celsrami/guess-a-number-celsrami'
        />
        <ListProjects
          title='Sports landing web'
          img={lading}
          desc='Maquetación de una Lading para una web deportes tiene un diseño atractivo que muestra todas las secciones y opciones disponibles. Además, se adapta a cualquier dispositivo gracias a su modo responsive diseñado con la estrategia "mobile first".'
          tecno='HTML, SASS'
          url='https://celsrami.github.io/Lading-web-celsrami/'
          git='https://github.com/celsrami/Lading-web-celsrami'
        />
      </ul>
    </section>
  );
};

export default Projects;
