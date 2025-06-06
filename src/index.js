import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Items from './pages/Items';
import Locations from './pages/Locations';
import Characters from './pages/Characters';
import Affinities from './pages/Affinities';

function App() {
  return(
    <BrowserRouter basename="/archivesofarconia">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="items" element={<Items />} />
          <Route path="locations" element={<Locations />} />
          <Route path="characters" element={<Characters />} />
          <Route path="affinities" element={<Affinities />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);