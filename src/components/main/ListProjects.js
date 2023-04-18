import "../../styles/layout/Projects.scss";
const ListProjects = ({ title, img, desc, tecno, git, url }) => {
  return (
    <li className='list__li'>
      <h2 className='list__title'>{title}</h2>
      <div className='list__divImg'>
        <img className='list__img' src={img} alt='' />
      </div>
      <article className='list__articleButton'>
        <a className='list__button' href={url}>
          <i class='fa-solid fa-play fa-fade'></i>
        </a>
        <a className='list__button' href={git}>
          <i class='fa-regular fa-file-lines'></i>
        </a>
      </article>
      <article className='list__div'>
        <p className='list__div__p'>{desc}</p>
        <p className='list__div__p'>{tecno}</p>
      </article>
    </li>
  );
};

export default ListProjects;
