import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../api';

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      const data = await getMovieDetails(id);
      setMovie(data);
      setLoading(false);
    }
    fetchDetails();
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (!movie) return <p>Filme não encontrado.</p>;

return (
  <div className="home-background">
    <div className="details-container">
      <button className="btn-back" onClick={() => navigate(-1)}>← Voltar</button>

      <h2>{movie.Title}</h2>
      
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png'}
        alt={movie.Title}
        className="movie-poster"
      />

      <p><strong>Ano:</strong> {movie.Year}</p>
      <p><strong>Gênero:</strong> {movie.Genre}</p>
      <p><strong>Diretor:</strong> {movie.Director}</p>
      <p><strong>Sinopse:</strong> {movie.Plot}</p>
    </div>
  </div>
);

}
