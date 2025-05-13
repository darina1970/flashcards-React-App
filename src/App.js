import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from './components/Layout';
// import { Home } from './pages/Home';  // Страница с таблицей слов
// import { Game } from './pages/Game';  // Страница с игрой
import './App.css';
// import { NotFound } from './pages/404';


const ROUTES = {
  HOME: '/',
  GAME: 'game',
};

const Home = lazy(() => import('./pages/Home'));
const Game = lazy(() => import('./pages/Game'));
const NotFound = lazy(() => import('./pages/404'));



function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={ROUTES.HOME} element={<Layout />}>
            <Route index element={<Home />} />  {/* Главная страница с таблицей */}
            <Route path={ROUTES.GAME} element={<Game />} />  {/* Страница с игрой */}
            <Route path='*' element={<NotFound />} /> {/* Страница 404 */}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
