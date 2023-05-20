import { useState, useEffect } from 'react';

import { Avatar, Button } from '../';

import styles from './UserCard.module.css';

import {ReactComponent as ReactLogo} from './img/logo.svg';

function UserCard() {
    const [ followers, setFollowers ] = useState(() => localStorage.getItem("followers")
                                                        ? JSON.parse(localStorage.getItem("followers"))
                                                        : 0);
    const [ isFollowing, setIsFollowing ] = useState(() => localStorage.getItem("isFollowing")
                                                        ? JSON.parse(localStorage.getItem("isFollowing"))
                                                        : false);

    useEffect(() => localStorage.setItem('followers', followers), [followers]);
    useEffect(() => localStorage.setItem('isFollowing', isFollowing), [isFollowing])
    
    const handleClick = (event) => {
        setFollowers(prev => isFollowing ? prev - 1 : prev + 1);
        setIsFollowing(prev => !prev);
        
        event.target.blur();
    };

    return (
        <div className={styles.userCard}>
            <ReactLogo/>
            <Avatar />
            <p className={`${styles.text} ${styles.textFirst}`}>777 tweets</p>
            <p className={`${styles.text} ${styles.textLast}`}>{followers} Followers</p>
            <Button isFollowing={isFollowing} onClick={handleClick}/>
        </div>
    );
}

export default UserCard;