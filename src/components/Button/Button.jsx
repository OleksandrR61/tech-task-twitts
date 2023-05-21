import styles from './Button.module.css'

function Button({ text, isFollowing, onClick }) {
    return (
        <button
            type="button"
            className={`${styles.button} ${(text || isFollowing) && styles.buttonFollowing}`}
            onClick={onClick}
        >
            {text ? text : isFollowing ? "Following" : "Follow"}
        </button>
    );
}

export default Button;