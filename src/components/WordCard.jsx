import React, { useState } from 'react';
import styles from '../styles/WordCard.module.css';

function WordCard({ word, index, totalCount, onNext, onPrev }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

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
                <button onClick={handleFlip}>Проверить</button>
              </div>
              
              {/* Обратная сторона карточки */}
              <div className={styles.cardBack}>
                <p><strong>English: </strong>{word.english}</p>
                <p><strong>Transcription: </strong>{word.transcription}</p>
                <p><strong>Translation: </strong>{word.russian}</p>
                <button onClick={handleFlip}>Готово</button>
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

    // <div className={styles.card}>
    //   <div className={`${styles.cardInner} ${isFlipped ? styles.flipped : ''}`}>
    //     {/* Лицевая сторона карточки */}
    //     <div className={styles.cardFront}>
    //       <p><strong>English: </strong>{word.english}</p>
    //       <p><strong>Transcription: </strong>{word.transcription}</p>
    //       <button onClick={handleFlip}>Проверить</button>
    //     </div>
        
    //     {/* Обратная сторона карточки */}
    //     <div className={styles.cardBack}>
    //       <p><strong>English: </strong>{word.english}</p>
    //       <p><strong>Transcription: </strong>{word.transcription}</p>
    //       <p><strong>Translation: </strong>{word.russian}</p>
    //     </div>
    //   </div>
      
    //   {/* Кнопки навигации */}
    //   <div className={styles.navigation}>
    //     <button onClick={onPrev} disabled={index === 0}>Предыдущее</button>
    //     <span>{index + 1} из {totalCount}</span>
    //     <button onClick={onNext} disabled={index === totalCount - 1}>Следующее</button>
    //   </div>
    // </div>
  );
}

export default WordCard;
