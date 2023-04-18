import "../../styles/layout/Contact.scss";
import photo from "../../images/imgporfolio.png";
const Conctact = () => {
  return (
    <section className='conctact'>
      <div className='conctact__div'>
        <img src={photo} alt='Logo' className='conctact__img'></img>
      </div>
      <article className='conctact__article'>
        <a className='conctact__link' href='https://github.com/celsrami'>
          <i class='fa-brands fa-github-alt icon'></i>celsrami
        </a>
        <a
          className='conctact__link'
          href='https://www.linkedin.com/in/celia-ram%C3%ADrez-jim%C3%A9nez-03a037203/'
        >
          <i class='fa-brands fa-linkedin icon'></i>Celia Ramírez
        </a>
        <a className='conctact__link' href='mailto:celsrami22@gmial.com'>
          <i class='fa-solid fa-envelope icon'></i>celsrami22@gmail.com
        </a>
      </article>
    </section>
  );
};

export default Conctact;
