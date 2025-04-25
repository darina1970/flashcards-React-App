import { Link } from "react-router-dom";
import styles from '../styles/Header.module.css';
import logo from '../images/logo.png'

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerWrapper}>
                <Link to='/'>
                    <img className={styles.logoImage} src={logo} alt="logo" />
                </Link>
                <nav>
                    <ul>
                        <li><Link to='/' className={styles.navLink}>Главная</Link></li>
                        <li><Link to='/game' className={styles.navLink}>Тренажёр</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}