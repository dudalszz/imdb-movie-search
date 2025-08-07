import { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import MovieCard from '../components/MovieCard';

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) return <p>Nenhum filme favoritado.</p>;

  return (
    <div>
      <h1>Favoritos</h1>
      {favorites.map(movie => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}
