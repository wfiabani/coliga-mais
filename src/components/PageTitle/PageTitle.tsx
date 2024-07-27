import styles from './PageTitle.module.css';

type Props = {
    title:String,
    subtitle:String | null
};

const PageTitle = (props:Props) => {
  return (
    <div className={styles.titleContainer}>
        <div className='container text-center'>
            <div className='row'>
                <div className='col'>
                    <h1 className={styles.title}>{props.title}</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <span className={styles.subTitle}>{props.subtitle}</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PageTitle;