import {Link} from 'react-router-dom';
import styles from './Candidatos.module.css';

const Candidatos = () => {
  return (


    <div className="container">

      <br /><br />
      <div className="row justify-content-center">
        <div className="col-md-3">
          <Link className={styles.vereador+" "+styles.vereador_a} to='/about'>
            <div className={styles.thumb}></div>
            <h1>Camila Pontes</h1>
            <h2>Prefeito</h2>
          </Link>
        </div>
        <div className="col-md-3">
          <Link className={styles.vereador+" "+styles.vereador_b} to='/about'>
            <div className={styles.thumb}></div>
            <h1>Emilia Fahhad</h1>
            <h2>Vice Prefeito</h2>
          </Link>
        </div>
      </div>
      <br /><br />

      <div className="row justify-content-center">
        <div className="col-md-3">
          <Link className={styles.vereador+" "+styles.vereador_a} to='/about'>
            <div className={styles.thumb}></div>
            <h1>Camila Pontes</h1>
            <h2>Veredor(a)</h2>
            <h3>12345</h3>
          </Link>
        </div>
        <div className="col-md-3">
          <Link className={styles.vereador+" "+styles.vereador_b} to='/about'>
            <div className={styles.thumb}></div>
            <h1>Emilia Fahhad</h1>
            <h2>Veredor(a)</h2>
            <h3>12345</h3>
          </Link>
        </div>
        <div className="col-md-3">
          <Link className={styles.vereador+" "+styles.vereador_c} to='/about'>
            <div className={styles.thumb}></div>
            <h1>Carlos Bragança</h1>
            <h2>Veredor(a)</h2>
            <h3>12345</h3>
          </Link>
        </div>
        <div className="col-md-3">
          <Link className={styles.vereador+" "+styles.vereador_d} to='/about'>
            <div className={styles.thumb}></div>
            <h1>Nelson Cunha</h1>
            <h2>Veredor(a)</h2>
            <h3>12345</h3>
          </Link>
        </div>
        <div className="col-md-3">
          <Link className={styles.vereador+" "+styles.vereador_e} to='/about'>
            <div className={styles.thumb}></div>
            <h1>Milton Carlos Nunes</h1>
            <h2>Veredor(a)</h2>
            <h3>12345</h3>
          </Link>
        </div>
        <div className="col-md-3">
          <Link className={styles.vereador+" "+styles.vereador_f} to='/about'>
            <div className={styles.thumb}></div>
            <h1>Sara Padilha</h1>
            <h2>Veredor(a)</h2>
            <h3>12345</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Candidatos;