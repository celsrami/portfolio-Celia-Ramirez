import "../../styles/layout/Projects.scss";
const Projects = () => {
  return (
    <section>
      <ul className='list'>
        <li className='list__li'>
          <div className='list__divImg'>
            <img
              className='list__img'
              src='https://img.freepik.com/vector-premium/silueta-negra-mujer-anonima-signo-interrogacion-ilustracion-vector-persona-femenina-incognito_261737-807.jpg'
              alt=''
            />
          </div>
          <h2 className='list__title'>Titulo del projecto</h2>
          <div className='list__div'>
            <h3 className=''> descripción</h3>
            <p>HTML CSS</p>
            <a className='list' href='a'>
              Play live app
            </a>
            <a href='a'>View Code</a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
