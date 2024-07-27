import React from 'react';
import styles from './Contato.module.css';

import MainMenu from '../../components/MainMenu/MainMenu';
import Footer from '../../components/footer/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';

const Contato: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      <MainMenu />
      <PageTitle title="CONTATO" subtitle="Entre em contato conosco através dos meios abaixo" />
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <br /><br /><br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contato;