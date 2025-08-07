import { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  // Carrega favoritos do localStorage quando o componente monta
  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Atualiza localStorage sempre que favorites mudar
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  
  function toggleFavorite(movie) {
    setFavorites((currentFavorites) => {
      const isFavorite = currentFavorites.some(fav => fav.imdbID === movie.imdbID);
      if (isFavorite) {
        return currentFavorites.filter(fav => fav.imdbID !== movie.imdbID);
      } else {
        return [...currentFavorites, movie];
      }
    });
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
