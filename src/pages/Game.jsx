import WordCardList from '../components/WordCardList';
import styles from '../styles/Game.module.css';
import wordsData from '../words.json';

export const Game = () => {
    return (
        <div className={styles.gameWrapper}>
          <h1>Тренажёр. Учим слова по карточкам</h1>
          <WordCardList words={wordsData} />
        </div>
      );
}