import booki from '../assets/captureBooki.png';
import ohmyfood from '../assets/ohmyfood.png';
import ohmyfoodV from '../assets/ohmyfoodV.png';
import lapanthere from '../assets/lapanthere.png';
import lapanthereV from '../assets/lapanthereV.png';
import internet from '../assets/internet.png';
import bookiV from '../assets/BookiV.png';
import kasa from '../assets/kasa.png';
import kasaV from '../assets/kasaV.png';

const liens = [
  "https://steph4477.github.io/booki/",
  "https://steph4477.github.io/ohmyfood/",
  "https://steph4477.github.io/la-panthere/",
  "https://steph4477.github.io/kasa"
];

const titres = [
  "Intégration d'un design de site web adaptable (responsive)",
  "Conception d'un site web animé avec des styles CSS",
  "Amélioration du référencement, de l'accessibilité et de la performance d'un site web existant",
  "Creation d'une application web de location immobilière avec React",
];
const imagesRecto = [booki, ohmyfood, lapanthere, kasa];
const imagesVerso = [bookiV, ohmyfoodV, lapanthereV, kasaV];

export default function CarteProjet() {

  const cartes = [];

  for (let i = 0; i < titres.length; i++) {
    cartes.push(
      <div key={i} className="CarteProjet_container_carte">
        <section className="CarteProjet_container_carte_recto">
          <div className="CarteProjet_container_carte_recto_fond">
            <img className='CarteProjet_container_carte_recto_fond_image' src={imagesRecto[i]} alt="" />
          </div>
        </section>
        <section className="CarteProjet_container_carte_verso">
          <div className="CarteProjet_container_carte_verso_fond">
            <img className='CarteProjet_container_carte_verso_fond_image' src={imagesVerso[i]} alt="" />
          </div>
          <div className="CarteProjet_container_carte_verso_contenu">
            <div className="CarteProjet_container_carte_verso_contenu_titre">
              <div className="CarteProjet_container_carte_verso_contenu_titre_h">{titres[i]}</div>
            </div>
            <article className="CarteProjet_container_carte_verso_contenu_article">
              <div className='CarteProjet_container_carte_verso_contenu_article_space'></div>
              <div className="CarteProjet_container_carte_verso_contenu_article_button">
                <button className="CarteProjet_container_carte_verso_contenu_article_button_icone">
                  <img src={internet} alt=""/>
                  <a className="CarteProjet_container_carte_verso_contenu_article_button_icone_texte" alt={titres[i]}
                    href={liens[i]}>Site internet
                  </a>
                </button>
              </div>
            </article >
          </div >
        </section >
      </div >
    );
  }

  return (
    <main className="CardProjet">
      <div className="CardProjet_container">
        {cartes}
      </div>
    </main>
  )
}
