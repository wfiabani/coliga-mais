import React from 'react';
import styles from './Vereadores.module.css';

import MainMenu from '../../components/MainMenu/MainMenu';
import Footer from '../../components/footer/Footer';

import Candidatos from '../../components/candidatos/Candidatos';
import PageTitle from '../../components/PageTitle/PageTitle';

const Vereadores: React.FC = () => {
  return (
    <div className={styles.vereadoresContainer}>
      <MainMenu />
      <PageTitle title="CANDIDATOS" subtitle="Conheça nossos candidados" />
      <Candidatos />
      <Footer />
    </div>
  );
}

export default Vereadores;