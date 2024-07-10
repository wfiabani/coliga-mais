import {Link} from 'react-router-dom';
import styles from './Footer.module.css';

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
                                    <b>Home</b>
                                </Link>
                            </li>
                            <li>
                                <Link to='/about'>
                                    <b>Sobre</b>
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact'>
                                    <b>Contact</b>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className={styles.social}>
                
            </div>

        </div>
    </footer>
  );
}

export default Footer;