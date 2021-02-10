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
    axios
      .get('https://swapi.dev/api/films/')
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .then((res) => {
        axios.get('https://swapi.dev/api/people/').then((res) => {
          setPersonas(res.data.results);
        });
      });
  }, []);

  async function handleBack() {
    navigate('/');
  }

  async function handleNext() {
    navigate('/peoples');
  }

  async function handleFilms() {
    navigate('/films');
  }

  return (
    <MoviesContext.Provider
      value={{ movies, loading, handleBack, handleNext, handleFilms, personas }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
