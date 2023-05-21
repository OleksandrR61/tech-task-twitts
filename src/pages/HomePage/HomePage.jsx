import { Link } from 'react-router-dom';

import styles from './HomePage.module.css';

const HomePage = () => (
    <>
        <div className={styles.container}>
            <h1 className={styles.text}>
                Hello world!<br/>
                I'm a Home Page
            </h1>
            <Link to="/tweets" className={styles.button}>Go to tweets</Link>
        </div>
    </>
);

export default HomePage;