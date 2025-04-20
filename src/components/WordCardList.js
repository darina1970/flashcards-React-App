import React, { useEffect, useState, useRef } from 'react';
import WordCard from './WordCard';

function WordCardList({ words }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const messageRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
  }

  useEffect(() => {
    if (currentIndex === words.length - 1 && messageRef.current) {
      messageRef.current.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  }, [currentIndex, words.length]); 

  return (
    <div>
      <h2>Карточки слов</h2>
      <WordCard
        word={words[currentIndex]}
        index={currentIndex}
        totalCount={words.length}
        onNext={handleNext}
        onPrev={handlePrev}
      />
      {currentIndex === words.length - 1 && (
        <div ref={messageRef} tabIndex='-1' style={{marginTop: '20px'}}>
          <p>Новых карточек пока нет</p>
          <button onClick={handleRestart}>Вернуться в начало</button>
        </div>
      )}
    </div>
  );
}

export default WordCardList;