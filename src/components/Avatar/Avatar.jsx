import styles from './Avatar.module.css';
import {ReactComponent as ReactBorder} from './img/ellipse.svg';
import avatar from './img/avatar.jpg';

function Avatar({children}) {
    return (
        <div className={styles.avatar}>
            {children ? children : <img
                src={avatar}
                alt="User avatar"
                className={styles.avatarImg}
                />
            }
            <ReactBorder className={styles.border} aria-hidden="true" />
        </div>
    );
}

export default Avatar;