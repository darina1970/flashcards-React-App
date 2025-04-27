// import React, { useState } from 'react';
// import WordCardList from './components/WordCardList';
// import WordList from './components/WordList';
// import wordsData from './words.json';  // Импортируем начальные данные из JSON файла
// import './App.css'


// function App() {
//   // Храним состояние слов в родительском компоненте
//   const [words, setWords] = useState(wordsData);

//   // Функция для обновления данных о словах, передаваемая в WordList
//   const handleWordEdit = (id, updatedWord) => {
//     const updatedWords = words.map((word) =>
//       word.id === id ? { ...word, ...updatedWord } : word
//     );
//     setWords(updatedWords);  // Обновляем состояние слов
//   };

//   return (
//     <div className='App'>
//       <h1>Мой словарь</h1>
//       <WordList words={words} onEditWord={handleWordEdit} />
//       <WordCardList words={words} />
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';  // Страница с таблицей слов
import { Game } from './pages/Game';  // Страница с игрой
import './App.css';
import { NotFound } from './pages/404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  {/* Главная страница с таблицей */}
          <Route path="game" element={<Game />} />  {/* Страница с игрой */}
          <Route path='*' element={<NotFound />} /> {/* Страница 404 */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
