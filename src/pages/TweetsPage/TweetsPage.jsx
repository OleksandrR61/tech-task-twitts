import { Link } from 'react-router-dom';

import styles from './TweetsPage.module.css';

import { App } from '../../components/';

const TweetsPage = () => (
    <>
        <Link to="/" className={styles.button}>Back home</Link>
        <App />
    </>
);

export default TweetsPage;