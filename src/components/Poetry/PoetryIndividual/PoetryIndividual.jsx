import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { poetryData } from '../../../data/poetryData';
import './PoetryIndividual.scss';

const PoetryIndividual = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const poetry = poetryData.find(post => post.link === slug);

  useEffect(() => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.classList.add('project-individual');
      document.body.classList.add('project-individual');
    }
    return () => {
      mainContent?.classList.remove('project-individual');
      document.body.classList.remove('project-individual');
    };
  }, []);

  useEffect(() => {
    window.dispatchEvent(new Event('enableTransparentHeader'));
    window.dispatchEvent(new Event('enableTransparentFooter'));
    return () => {
      window.dispatchEvent(new Event('disableTransparentHeader'));
      window.dispatchEvent(new Event('disableTransparentFooter'));
    };
  }, []);

  if (!poetry) {
    navigate('/poetry');
    return null;
  }

  return (
    <article className="pi-root">
      {/* Hero */}
      <div className="pi-hero">
        <img src={poetry.image} alt={poetry.title} className="pi-hero-img" />
        <div className="pi-hero-overlay">
          {/* <p className="pi-eyebrow">Poetry</p> */}
          <h1 className="pi-title">{poetry.title}</h1>
        </div>
      </div>

      {/* Poem */}
      <div className="pi-body">
        <div className="pi-rule" />
        <pre className="pi-poem">{poetry.content}</pre>
        <div className="pi-rule" />
      </div>
    </article>
  );
};

export default PoetryIndividual;