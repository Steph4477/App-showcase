import phone from '../assets/phone.svg';
import mail from '../assets/mail.svg';

export default function Header(){
    return (
        <header className="header">
            <section className="header_nav">                
                <div className="header_nav_contact">
                    <div className="header_nav_contact_tel">
                        <img src={phone} className="fas fa-phone header_nav_contact_tel_icone" alt="icone téléphone"/>
                        <a href="tel:0620519091" className="header_nav_contact_tel_N">Appelez-moi</a>
                    </div>
                    <div className="header_nav_contact_mail">
                        <img src={mail} className="fas fa-envelope header_nav_contact_mail_icone" alt="icone mail"/>
                        <a href="mailto:morelstephane4026@neuf.fr" className="header_nav_contact_mail_lien" title="boîte mail">Contactez-moi</a>
                    </div>
                </div>
            </section>
        </header>
    )
}