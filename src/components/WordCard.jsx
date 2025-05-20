import React, { useEffect, useRef } from 'react';
import styles from '../styles/WordCard.module.css';

function WordCard({ word, index, totalCount, onNext, onPrev, incrementStudiedWords, isFlipped, setIsFlipped }) {
  const buttonRef = useRef(null);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleTranslationClick = () => {
    incrementStudiedWords(index);
    setIsFlipped(false);
  };

  useEffect(() => {
    if (buttonRef.current && !isFlipped) {
      buttonRef.current.focus();
    }
  },[word, isFlipped]);

  return (
    <div className={styles.cardContainer}>
      {word ? (
        <>
          <div className={styles.cardRow}>
            <button
            className={styles.arrowLeft}
            onClick={onPrev}
            disabled={index === 0}
            >
              &#8592;
            </button>
            
            <div className={`${styles.cardInner} ${isFlipped ? styles.flipped : ''}`}>
              {/* Лицевая сторона карточки */}
              <div className={styles.cardFront}>
                <p><strong>English: </strong>{word.english}</p>
                <p><strong>Transcription: </strong>{word.transcription}</p>
                <button className={styles.button} ref={buttonRef} onClick={handleFlip}>Проверить</button>
              </div>
              
              {/* Обратная сторона карточки */}
              <div className={styles.cardBack}>
                <p><strong>English: </strong>{word.english}</p>
                <p><strong>Transcription: </strong>{word.transcription}</p>
                <p><strong>Translation: </strong>{word.russian}</p>
                <button onClick={handleTranslationClick}>Готово</button>
              </div>
            </div>
            <button
              className={styles.arrowRight}
              onClick={onNext}
              disabled={index === totalCount - 1}
              >
                &#8594;
            </button>    
          </div>
          
          {/* Кнопки навигации */}
          <div className={styles.navigation}>
            <span>{index + 1} из {totalCount}</span>
          </div>
        </>
      ) : null}

    </div>
  );
}

export default WordCard;
