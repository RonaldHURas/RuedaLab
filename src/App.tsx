import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // Navigation handling wrapper
  const handleNavigate = (section: string) => {
     // This function is mainly for Header/Footer legacy support if needed
     // In the new router setup, we handle this differently or pass it down
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
       <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <Header onNavigate={handleNavigate} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/producto/:id" element={<ProductDetailPage />} />
        </Routes>

        <Footer onNavigate={handleNavigate} />

        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
