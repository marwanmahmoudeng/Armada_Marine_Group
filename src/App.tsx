import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MarineSpareParts from './components/MarineSpareParts';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Header activeSection="home" />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/marine-spare-parts" element={<MarineSpareParts />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
