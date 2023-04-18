import photo from "../../images/imgporfolio.png";
import "../../styles/layout/Home.scss";

const Home = () => {
  return (
    <section className='home'>
      <div className='home__div'>
        <img src={photo} alt='Logo' className='home__img'></img>
      </div>
      <article className='home__article'>
        <p className='home__article__hello'>Hello, My name is</p>
        <p className='home__article__name'>Celia Ramírez</p>
        <p className='home__article__job'>I'm a web developer</p>
      </article>
    </section>
  );
};

export default Home;
