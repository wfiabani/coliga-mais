import {Link} from 'react-router-dom';
import styles from './Footer.module.css';


import ImgInstagram from '../../assets/social/instagram.png'
import ImgFacebook from '../../assets/social/facebook.png'
import ImgYouTube from '../../assets/social/youtube.png'
import ImgWhatsApp from '../../assets/social/whatsapp.png'


const siteTitle:String = import.meta.env.VITE_SITE_TITLE;

console.log("Site title:", siteTitle);

type Props = {};

const Footer = (props:Props) => {
  return (
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <nav>
                        <ul className={styles.footerMenu}>
                            <li>
                                <Link to='/home'>
                                    <b>Início</b>
                                </Link>
                            </li>
                            <li>
                                <Link to='/propostas'>
                                    <b>Propostas</b>
                                </Link>
                            </li>
                            <li>
                                <Link to='/candidatos'>
                                    <b>Candidatos</b>
                                </Link>
                            </li>
                            <li>
                                <Link to='/contato'>
                                    <b>Contato</b>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className={styles.social}>
                <a href='#'>
                    <img src={ImgFacebook} />
                </a>
                <a href='#'>
                    <img src={ImgInstagram} />
                </a>
                <a href='#'>
                    <img src={ImgYouTube} />
                </a>
                <a href='#'>
                    <img src={ImgWhatsApp} />
                </a>
            </div>

            <div className={styles.address}>
                <br /><br />
                Rua Almeida Barroso, num 127, Porto Alegre/RS<br />
                CEP: 990000-000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fone: (54) 9 0000-0000 
            </div>

        </div>
    </footer>
  );
}

export default Footer;