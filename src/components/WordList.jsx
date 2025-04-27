// import React, { useState } from 'react';
// import wordsData from '../words.json';  // Импортируем данные из JSON файла
// import styles from '../styles/WordList.module.css'

// function WordList() {
//   // Состояние для хранения списка слов и информации о том, какое слово редактируется
//   const [words, setWords] = useState(wordsData);
//   const [editingId, setEditingId] = useState(null);
//   const [editValues, setEditValues] = useState({
//     english: '',
//     transcription: '',
//     russian: '',
//     tags: '',
//   });

//   // Обрабатываем изменения значений в инпутах
//   const handleChange = (event) => {
//     setEditValues({
//       ...editValues,
//       [event.target.name]: event.target.value
//     });
//   };

//   // Функция для начала редактирования
//   const startEditing = (id, word) => {
//     setEditingId(id);
//     setEditValues({
//       english: word.english,
//       transcription: word.transcription,
//       russian: word.russian,
//       tags: word.tags
//     });
//   };

//   // Функция для сохранения изменений
//   const saveChanges = (id) => {
//     const updateWords = words.map((word) => 
//       word.id === id ? {...word, ...editValues} : word
//     );
//     setWords(updateWords);
//     // Останавливаем редактирование
//     setEditingId(null);
//   };

//   // Функция для отмены редактирования
//   const cancelEditing = () => {
//     setEditingId(null);
//   }

//   // Функция для удаления слова
//   const deleteWord = (id) => {
//     setWords(words.filter((word) => word.id !== id));
//   };

//   return (
//     <div className={styles.tableContainer}>
//       <h2 className={styles.tableTitle}>Словарь</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>#</th> 
//             <th>Основное значение</th>
//             <th>Транскрипция</th>
//             <th>Перевод</th>
//             <th>Тема</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {words.map((word, index) => (
//             <tr key={word.id}>
//               <td>{index + 1}</td>
//               <td>
//                 {editingId === word.id ? (
//                   <input 
//                     type='text'
//                     name='english'
//                     value={editValues.english}
//                     onChange={handleChange}
//                   />
//                 ) : (
//                   word.english
//                 )}
//               </td>
//               <td>
//                 {editingId === word.id ? (
//                   <input 
//                     type='text'
//                     name='transcription'
//                     value={editValues.transcription}
//                     onChange={handleChange}
//                   />
//                 ) : (
//                   word.transcription
//                 )}
//               </td>
//               <td>
//                 {editingId === word.id ? (
//                   <input 
//                     type='text'
//                     name='russian'
//                     value={editValues.russian}
//                     onChange={handleChange}
//                   />
//                 ) : (
//                   word.russian
//                 )}
//               </td>
//               <td>
//                 {editingId === word.id ? (
//                   <input 
//                     type='text'
//                     name='tags'
//                     value={editValues.tags}
//                     onChange={handleChange}
//                   />
//                 ) : (
//                   word.tags
//                 )}
//               </td>
//               <td className={styles.buttonsCell}>
//                 {editingId === word.id && (
//                   <div>
//                   <button onClick={() => saveChanges(word.id)}>Сохранить</button>
//                   <button className={styles.cancel} onClick={cancelEditing}>Отменить</button>
//                   </div>
//                 )}
//                 {editingId !== word.id && (
//                   <div>
//                   <button onClick={() => startEditing(word.id, word)}>Редактировать</button>
//                   <button className={styles.delete} onClick={() => deleteWord(word.id)}>Удалить</button>
//                   </div>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default WordList;


import React, { useState } from 'react';
import styles from '../styles/WordList.module.css';

function WordList({ words, onEditWord }) {
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({
    english: '',
    transcription: '',
    russian: '',
    tags: '',
  });

  // Обрабатываем изменения значений в инпутах
  const handleChange = (event) => {
    setEditValues({
      ...editValues,
      [event.target.name]: event.target.value,
    });
  };

  // Функция для начала редактирования
  const startEditing = (id, word) => {
    setEditingId(id);
    setEditValues({
      english: word.english,
      transcription: word.transcription,
      russian: word.russian,
      tags: word.tags,
    });
  };

  // Функция для сохранения изменений
  const saveChanges = (id) => {
    onEditWord(id, editValues);  // Отправляем изменения в родительский компонент
    setEditingId(null);  // Останавливаем редактирование
  };

  // Функция для отмены редактирования
  const cancelEditing = () => {
    setEditingId(null);
  };

  // Функция для удаления слова
  const deleteWord = (id) => {
    onEditWord(id, { deleted: true });  // Добавляем флаг "удалено"
  };

  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.tableTitle}>Словарь</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Основное значение</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            <th>Тема</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {words.map((word, index) =>
            !word.deleted && (
              <tr key={word.id}>
                <td>{index + 1}</td>
                <td>
                  {editingId === word.id ? (
                    <input
                      type="text"
                      name="english"
                      value={editValues.english}
                      onChange={handleChange}
                    />
                  ) : (
                    word.english
                  )}
                </td>
                <td>
                  {editingId === word.id ? (
                    <input
                      type="text"
                      name="transcription"
                      value={editValues.transcription}
                      onChange={handleChange}
                    />
                  ) : (
                    word.transcription
                  )}
                </td>
                <td>
                  {editingId === word.id ? (
                    <input
                      type="text"
                      name="russian"
                      value={editValues.russian}
                      onChange={handleChange}
                    />
                  ) : (
                    word.russian
                  )}
                </td>
                <td>
                  {editingId === word.id ? (
                    <input
                      type="text"
                      name="tags"
                      value={editValues.tags}
                      onChange={handleChange}
                    />
                  ) : (
                    word.tags
                  )}
                </td>
                <td className={styles.buttonsCell}>
                  {editingId === word.id ? (
                    <div>
                      <button onClick={() => saveChanges(word.id)}>Сохранить</button>
                      <button className={styles.cancel} onClick={cancelEditing}>Отменить</button>
                    </div>
                  ) : (
                    <div>
                      <button onClick={() => startEditing(word.id, word)}>Редактировать</button>
                      <button className={styles.delete} onClick={() => deleteWord(word.id)}>Удалить</button>
                    </div>
                  )}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default WordList;