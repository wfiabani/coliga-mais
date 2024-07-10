import React from 'react';
import styles from './Home.module.css';

import Footer from '../../components/footer/Footer';
import MainMenu from '../../components/MainMenu/MainMenu';

import Banner from '../../assets/banner.jpg';

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <MainMenu />
      <img src={Banner} className={styles.bannerImage} ></img>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            teste
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;