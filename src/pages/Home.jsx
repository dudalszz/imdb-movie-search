import { useState, useEffect, useContext } from 'react';
import { searchMovies } from '../api';
import MovieCard from '../components/MovieCard';
import { FavoritesContext } from '../contexts/FavoritesContext';

export default function Home() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    setPage(1); // Reset para página 1 na nova busca
    await fetchMovies(query, 1);
  };

  const fetchMovies = async (q, p) => {
    setLoading(true);
    setError('');
    try {
      const data = await searchMovies(q, p);
      if (data.Response === 'True') {
        setMovies(data.Search);
        setTotal(parseInt(data.totalResults));
      } else {
        setMovies([]);
        setTotal(0);
        setError(data.Error || 'Nenhum resultado');
      }
    } catch {
      setError('Erro ao buscar filmes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) fetchMovies(query, page);
  }, [page]);

  return (
    <div>
      <h1>Buscar Filmes</h1>
      <form onSubmit={handleSearch}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite o nome do filme"
        />
        <button type="submit">Buscar</button>
      </form>

      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {movies.map(movie => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          isFavorite={favorites.some(f => f.imdbID === movie.imdbID)}
          onFavoriteToggle={toggleFavorite}
        />
      ))}

      {total > 10 && (
        <div style={{ marginTop: 10 }}>
          <button onClick={() => setPage(p => p - 1)} disabled={page === 1}>
            Anterior
          </button>
          <span style={{ margin: '0 10px' }}>Página {page}</span>
          <button onClick={() => setPage(p => p + 1)} disabled={page * 10 >= total}>
            Próxima
          </button>
        </div>
      )}
    </div>
  );
}
