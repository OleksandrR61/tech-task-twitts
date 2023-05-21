import { useEffect, useState } from 'react';

import { UserCard, Button } from '../'

import styles from './CardsContainer.module.css';

import { getUsers } from '../../api/';

function CardsContainer() {
    const [ users, setUsers ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ totalPage, setTotalPage ] = useState(1);

    useEffect(() => async () => {
        console.log("WTF");
        const usersView = await getUsers();
        setTotalPage(Math.ceil(usersView.length / 3));
        setUsers(usersView.slice(0, 3));
        console.log("usersView => ", usersView);
    }, [setUsers, setTotalPage]);

    const handleClick  = async event => {
        event.target.blur();

        const nextPage = page + 1;
        setPage(nextPage);
        const usersView = await getUsers();
        setUsers(usersView.slice(0, nextPage * 3));
        console.log("usersView => ", usersView);
    };

    console.log("users => ", users);

    return (
        <div className={styles.cardsContainer}>
            <ul className={styles.list}>
                {users.map(user => <li key={user.id}><UserCard user={user} /></li>)}
            </ul>
            {page < totalPage && <Button text="Load More" onClick={handleClick} />}
        </div>
    );
}

export default CardsContainer;