import { UserCard } from '../'

import styles from './CardsContainer.module.css';

function CardsContainer() {
    return (
        <div className={styles.cardsContainer}>
            <UserCard />
        </div>
    );
}

export default CardsContainer;