import React from 'react';
import styles from './Propostas.module.css';

import MainMenu from '../../components/MainMenu/MainMenu';
import Footer from '../../components/footer/Footer';

import PageTitle from '../../components/PageTitle/PageTitle';

const Propostas: React.FC = () => {
  return (
    <div className={styles.propostasContainer}>
      <MainMenu />
      <PageTitle title="PROPOSTAS" subtitle="Conheça nossas propostas para um futuro melhor para todos" />
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Propostas;