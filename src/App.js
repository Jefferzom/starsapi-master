import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Peoples from './components/Peoples/Peoples';
import Films from './components/Films/Films';
import NotFound from './components/Error/NotFound';
import Head from './components/Head/Head';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { GetSW } from './UserContext';
import { WarsBody } from './styles';
import './App.css';

const App = () => {
  return (
    <section className="App">
      <BrowserRouter>
        <GetSW>
          <WarsBody>
            <Head />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/films" exact element={<Films />} />
              <Route path="/peoples" exact element={<Peoples />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </WarsBody>
          <Footer />
        </GetSW>
      </BrowserRouter>
    </section>
  );
};

export default App;
