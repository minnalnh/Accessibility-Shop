import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './components/pages/HomePage';
import BrushesPage from './components/pages/BrushesPage';
import PaintPage from './components/pages/PaintPage';
import PaperPage from './components/pages/PaperPage';
import PencilsPage from './components/pages/PencilsPage';
import CheckoutPage from './components/pages/CheckoutPage';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/brushes" element={<BrushesPage />}/>
          <Route path="/paper" element={<PaperPage />}/>
          <Route path="/paint" element={<PaintPage />}/>
          <Route path="/pencils" element={<PencilsPage />}/>
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;