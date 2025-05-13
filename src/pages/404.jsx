import { Link } from "react-router-dom";
import styles from "../styles/NotFound.module.css";
import notFoundImg from "../images/notFoundImg.png";

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        <h1>OOPS!!! Страница не найдена</h1>
        <div className={styles.image__wrapper}>
          <img src={notFoundImg} alt="404 Error" className={styles.image} />
        </div>
        <Link to="/" className={styles.backHome}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;