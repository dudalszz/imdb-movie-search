import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Favorites from './pages/Favorites';

export default function App() {
  return (
    <HashRouter>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">Busca</Link> | <Link to="/favorites">Favoritos</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
