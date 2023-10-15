
import tiktok from '../assets/RS/tiktok.svg';
import linkedin from '../assets/RS/linkedin.svg';
import indeed from '../assets/RS/indeed.svg';
import mail from '../assets/mail.svg';

export default function Footer() {

  const icons = [
    { name: 'mail', image: mail, lien: "mailto:morelstephane4026@neuf.fr"},
    { name: 'indeed', image: indeed, lien: "https://profile.indeed.com/" },
    { name: 'linkedIn', image: linkedin, lien: "https://www.linkedin.com/in/stephane-morel44/" },
    { name: 'tikTok', image: tiktok, lien: "https://www.tiktok.com/@skalite44" }
  ];

  return (
    <div className="footer">
      <div className="footer_rs">
        {icons.map((icon, index) => (
          <a key={index} className={"footer_rs_icone-" + icon.name} href={icon.lien}>
            <img src={icon.image} className={icon.name} alt={'icone' + icon.name} />
          </a>
        ))}
      </div>
      

      <div className="footer_rs_contact_mail">
        
        <a href="mailto:morelstephane4026@neuf.fr" className="footer_rs_contact_mail_lien" title="boîte mail">Contactez-moi</a>
      </div>

    </div>
  );
}
