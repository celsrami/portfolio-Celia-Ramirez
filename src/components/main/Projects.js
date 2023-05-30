import "../../styles/layout/Projects.scss";
import ListProjects from "./ListProjects";
import cocktail from "../../images/cocktails.jpg";
import harry from "../../images/harry.jpg";
import play from "../../images/juegonumber.jpg";
import lading from "../../images/landing.jpg";
import hangmanGame from "../../images/Juego ahorcado.jpg";
import cardJob from "../../images/card.jpg";
import cardProject from "../../images/projectcard.jpg";
import calculator from "../../images/calculadora.jpg";
import ladingBootstrap from "../../images/ladingbootstrap.JPG";
import blender from "../../images/blenderimg.JPG";
const Projects = () => {
  return (
    <section className='list'>
      <h3 className='list__project'>personal projects</h3>

      <ul className='list__ul'>
        <ListProjects
          title='Search Cocktails'
          img={cocktail}
          // desc='La aplicación cuenta con una lista de bebidas y cócteles de todo el mundo proveniente de una API externa, además permite a los usuarios agregar sus cócteles favoritos a una sección personalizada.'
          tecno='HTML, SASS, JavaScript'
          url='https://celsrami.github.io/cocktail-search-celsrami/'
          git='https://github.com/celsrami/cocktail-search-celsrami'
        />
        <ListProjects
          title='Harry Potter character'
          img={harry}
          // desc='La app realiza una petición a un API para obtener una lista de personajes de Harry Potter filtrados por la casa a la que pertenecen. También permite buscar por nombre y muestra la información completa al hacer click sobre un personaje.'
          tecno='HTML, SASS, JavaScript, React'
          url='https://celsrami.github.io/harry-potter-character-celsrami/'
          git='https://github.com/celsrami/harry-potter-character-celsrami'
        />
        <ListProjects
          title='Landing bootstrap'
          img={ladingBootstrap}
          tecno='HTML, CSS, Bootstrap'
          url='https://celsrami.github.io/landing-page-bootstrap/'
          git='https://github.com/celsrami/landing-page-bootstrap'
        />
        <ListProjects
          title='Blender and timer'
          img={blender}
          tecno='HTML, CSS, JavaScript, Sounds'
          url='https://celsrami.github.io/blender/'
          git='https://github.com/celsrami/blender'
        />
        <ListProjects
          title='Guess a random number'
          img={play}
          // desc='El juego consiste en adivinar un número aleatorio entre 1 y 100, recibiendo pistas sobre si los intentos son demasiado altos o bajos, y contabilizando el número de intentos. Se debe recargar la página para jugar de nuevo.'
          tecno='HTML, SASS, JavaScript, React'
          url='https://celsrami.github.io/guess-a-number-celsrami/'
          git='https://github.com/celsrami/guess-a-number-celsrami'
        />
        <ListProjects
          title='Calculator'
          img={calculator}
          // desc='Esta calculadora es una herramienta de cálculo práctica y funcional, que
          // realiza operaciones matemáticas básicas como suma, resta, multiplicación y división. Además muestra la operación que se va realizando en la pantalla.'
          tecno='HTML, SASS, javaScript'
          url='https://celsrami.github.io/calculator/'
          git='https://github.com/celsrami/calculator'
        />
        <ListProjects
          title='Sports landing web'
          img={lading}
          // desc='Maquetación de una Lading para una web deportes tiene un diseño atractivo que muestra todas las secciones y opciones disponibles. Además, se adapta a cualquier dispositivo gracias a su modo responsive diseñado con la estrategia "mobile first".'
          tecno='HTML, SASS'
          url='https://celsrami.github.io/Lading-web-celsrami/'
          git='https://github.com/celsrami/Lading-web-celsrami'
        />
      </ul>
      <h3 className='list__project'>Group projects</h3>
      <ul className='list__ul'>
        <ListProjects
          title='Hangman game'
          img={hangmanGame}
          // desc='El juego consiste en adivinar una palabra oculta antes de que se dibuje un muñeco ahorcado por cada intento fallido. Además, cuenta con la opción para dos jugadores, donde uno de ellos puede elegir la palabra a adivinar.'
          tecno='HTML, SASS, JavaScript, React'
          url='https://celsrami.github.io/hangman-game/'
          git='https://github.com/celsrami/hangman-game'
        />
        <ListProjects
          title='Create a virtual card'
          img={cardJob}
          // desc='La app permite crear tarjetas virtuales sobre ti mismo, donde puedes rellenar el formulario, elegir y visualizar el diseño deseado. Al finalizar, se genera una URL única para publicar o compartir en diferentes plataformas.'
          tecno='HTML, SASS, JavaScript'
          url='https://celsrami.github.io/project-create-a-virtual-card/create-card.html'
          git='https://github.com/celsrami/project-create-a-virtual-card'
        />
        <ListProjects
          title='Create a project card'
          img={cardProject}
          // desc='La web está diseñada para crear y mostrar proyectos personales. En la sección "crear tarjeta" se pueden introducir datos personales y profesionales, subir fotos y obtener una vista maquetada con toda la información del proyecto.'
          tecno='HTML, SASS, JavaScript, React'
          url='https://proyectos-molones-code-queens.onrender.com/'
          git='https://github.com/celsrami/create-project-cards'
        />
      </ul>
    </section>
  );
};

export default Projects;
