import photo from '../assets/photo_mini.png';
import rotateIcon from '../assets/rotateIcon.svg';
import git from '../assets/git.svg';

export default function CarteDeVisite() {

    return (
        <div className="CarteDeVisite_container">
            <div className="CarteDeVisite_container_carte">
                <section className="CarteDeVisite_container_carte_recto">
                    <div className="CarteDeVisite_container_carte_recto_fond"></div>
                    <div className="CarteDeVisite_container_carte_recto_contenu">
                        
                        <article className="CarteDeVisite_container_carte_recto_contenu_article">
                            
                            <div className="CarteDeVisite_container_carte_recto_contenu_article_image">
                                <img src={photo} alt="Stéphane Morel" />
                            </div>

                            <div className="CarteDeVisite_container_carte_recto_contenu_article_texte">
                                <h1 className="CarteDeVisite_container_carte_recto_contenu_article_texte_titre">Stéphane Morel</h1>
                                <h2 className="CarteDeVisite_container_carte_recto_contenu_article_texte_nom">Intégrateur, développeur web</h2>
                            </div>

                        </article>

                        <div className="CarteDeVisite_container_carte_recto_contenu_article_rotate">
                            <div className="CarteDeVisite_container_carte_recto_contenu_article_rotate_image">
                                <img src={rotateIcon} alt="icone retorner" />
                            </div>
                            <div className="CarteDeVisite_container_carte_recto_contenu_article_rotate_txt">Retourner </div>
                        </div>

                    </div>
                </section>

                <section className="CarteDeVisite_container_carte_verso">
                    <div className="CarteDeVisite_container_carte_verso_fond"></div>
                    <div className="CarteDeVisite_container_carte_verso_contenu">
                        <article className="CarteDeVisite_container_carte_verso_contenu_article">
                            <p>Je réalise ce projet dans le but de simplifier ma recherche d'emploi ou d'alternance.
                                <br />
                                <br />

                                Vous pouvez voir le code de mes projets réalisés en cliquant sur le bouton.</p>

                            <div className="CarteDeVisite_container_carte_verso_contenu_article_button">
                                <button className="CarteDeVisite_container_carte_verso_contenu_article_button_icone">

                                    
                                    <a className="CarteDeVisite_container_carte_verso_contenu_article_button_icone_texte" href="https://github.com/Steph4477">
                                        <img src={git} alt="icone github" />
                                         GitHub
                                    </a>
                                </button>
                            </div>
                        </article >
                    </div >
                </section >
            </div >
        </div >
    )
}