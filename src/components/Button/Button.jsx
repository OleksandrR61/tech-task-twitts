import styles from './Button.module.css'

function Button({ isFollowing, onClick }) {
    return (
        <button
            type="button"
            className={`${styles.button} ${isFollowing && styles.buttonFollowing}`}
            onClick={onClick}
        >
            {isFollowing}{isFollowing ? "Following" : "Follow"}
        </button>
    );
}

export default Button;