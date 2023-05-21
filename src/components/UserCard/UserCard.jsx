import { useState, useEffect } from 'react';

import { Avatar, Button } from '../';

import styles from './UserCard.module.css';

import {ReactComponent as ReactLogo} from './img/logo.svg';

import { convertNumber } from '../../utils';

function UserCard({user}) {
    const [ followers, setFollowers ] = useState(() => localStorage.getItem(user.user)
                                            ? JSON.parse(localStorage.getItem(user.user)).followers
                                            : user.followers);
    const [ isFollowing, setIsFollowing ] = useState(() => localStorage.getItem(user.user)
                                            ? JSON.parse(localStorage.getItem(user.user)).isFollowing
                                            : false);

    useEffect(() =>
        localStorage.setItem(`${user.user}`, JSON.stringify({
            followers: followers,
            isFollowing: isFollowing
        })), [user, followers, isFollowing]
    );
    
    const handleClick = (event) => {
        setFollowers(prev => isFollowing ? prev - 1 : prev + 1);
        setIsFollowing(prev => !prev);
        
        event.target.blur();
    };

    return (
        <div className={styles.userCard}>
            <ReactLogo/>
            <Avatar><img src={user.avatar} alt="User avatar" /></Avatar>
            <p className={`${styles.text} ${styles.textFirst}`}>{convertNumber(user.tweets)} tweets</p>
            <p className={`${styles.text} ${styles.textLast}`}>{convertNumber(followers)} followers</p>
            <Button isFollowing={isFollowing} onClick={handleClick}/>
        </div>
    );
}

export default UserCard;