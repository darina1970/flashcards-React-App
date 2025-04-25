import React, { useState } from 'react';
// import WordCardList from '../components/WordCardList';
import WordList from '../components/WordList';
import wordsData from '../words.json';  // Импортируем начальные данные из JSON файла
import styles from '../styles/Home.module.css'


export const Home = () => {
  // Храним состояние слов в родительском компоненте
  const [words, setWords] = useState(wordsData);

  // Функция для обновления данных о словах, передаваемая в WordList
  const handleWordEdit = (id, updatedWord) => {
    const updatedWords = words.map((word) =>
      word.id === id ? { ...word, ...updatedWord } : word
    );
    setWords(updatedWords);  // Обновляем состояние слов
  };

  return (
    <div className={styles.home}>
      <h1>Мой словарь</h1>
      <WordList words={words} onEditWord={handleWordEdit} />
      {/* <WordCardList words={words} /> */}
    </div>
  );
}

