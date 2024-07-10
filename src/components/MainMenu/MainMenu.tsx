import {Link} from 'react-router-dom';
import styles from './MainMenu.module.css';

import Logo from '../../assets/logo.png'

const siteTitle:String = import.meta.env.VITE_SITE_TITLE;

console.log("Site title:", siteTitle);

type Props = {};

const MainMenu = (props:Props) => {
  return (
    <nav className={styles.mainMenu}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Link className={styles.logo} to='/home'>
              <img src={Logo} />
            </Link>
          </div>
          <div className="col">
            <ul>
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
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainMenu;