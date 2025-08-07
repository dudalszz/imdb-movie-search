import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

export default function MovieCard({ movie }) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.some(fav => fav.imdbID === movie.imdbID);

  return (
    <div style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
      <h3>{movie.Title}</h3>
      <img src={movie.Poster} alt={movie.Title} width={100} />
      <div>
        <Link to={`/movie/${movie.imdbID}`} style={{ color: '#ffffffff', textDecoration: 'none' }}>
          Ver detalhes
        </Link>
        <button onClick={() => toggleFavorite(movie)} style={{ marginLeft: 10 }}>
          {isFavorite ? 'Remover dos favoritos' : 'Favoritar'}
        </button>
      </div>
    </div>
  );
}
