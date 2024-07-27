import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Home.module.css';

import Footer from '../../components/footer/Footer';
import MainMenu from '../../components/MainMenu/MainMenu';

import Candidatos from '../../components/candidatos/Candidatos';

import Banner from '../../assets/banner.jpg';

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>



      <MainMenu />



      <img src={Banner} className={styles.bannerImage} ></img>


      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <br /><br />
            <h1>SOBRE NÓS</h1>
            <iframe width="70%" height="500px" src="https://www.youtube.com/embed/fEE0CA6yfZo?si=fTZeGostG16GqSyy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <br /><br /><br />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <Link className={styles.hLink+" "+styles.hLinkA} to='/propostas'>
              NOSSAS PROPOSTAS
            </Link>
          </div>
          <div className="col-md-6 text-center">
            <Link className={styles.hLink+" "+styles.hLinkB} to='/contato'>
              FALE CONOSCO
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <br /><br />
            <h1>Conheça nossos candidatos</h1>
            <p>Conheça nossos candidatos</p>
            <br /><br /><br />
          </div>
        </div>
      </div>

      <Candidatos />
      <Footer />


    </div>
  );
}

export default Home;