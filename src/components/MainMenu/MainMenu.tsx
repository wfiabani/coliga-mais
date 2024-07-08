import { useState, forwardRef, useImperativeHandle } from 'react';
import styles from './MainMenu.module.css';

const siteTitle:String = import.meta.env.VITE_SITE_TITLE;

console.log("Site title:", siteTitle);

type Props = {};

const MainMenu = forwardRef((props:Props, ref:any) => {
  return (
    <nav className={styles.mainMenu}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        {/* Adicione mais itens de menu conforme necessário */}
      </ul>
    </nav>
  );
});

export default MainMenu;