import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const MoviesContext = React.createContext();

export const GetSW = ({ children }) => {
  const [movies, setMovies] = React.useState([]);
  const [personas, setPersonas] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    setLoading(true);
    axios.get('https://swapi.dev/api/films/').then((res) => {
      setMovies(res.data.results);
      setLoading(false);
    });
  }, []);

  async function handleBack() {
    navigate('/');
  }

  async function handleNext() {
    navigate('/peoples');
  }

  return (
    <MoviesContext.Provider value={{ movies, loading, handleBack, handleNext }}>
      {children}
    </MoviesContext.Provider>
  );
};
