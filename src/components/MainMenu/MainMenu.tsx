import { forwardRef } from 'react';
import {Link} from 'react-router-dom';
import styles from './MainMenu.module.css';

const siteTitle:String = import.meta.env.VITE_SITE_TITLE;

console.log("Site title:", siteTitle);

type Props = {};

const MainMenu = forwardRef((props:Props, ref:any) => {
  return (
    <nav className={styles.mainMenu}>
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
    </nav>
  );
});

export default MainMenu;