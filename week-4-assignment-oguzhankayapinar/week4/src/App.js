 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TopNavbar from './Components/TopNavBar';
import { ThemeProvider } from './Context/ThemeContext';
import Products from './Pages/Products';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import Pricing from './Pages/Pricing';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <TopNavbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
