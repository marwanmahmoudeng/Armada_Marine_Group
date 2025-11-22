import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MarineSpareParts from './components/MarineSpareParts';
import ShipTechnicalSupport from './components/ShipTechnicalSupport';
import EngineeringInspections from './components/EngineeringInspections';
import EmergencyDeliveriesSuezCanal from './components/EmergencyDeliveriesSuezCanal';
import ImportExportServices from './components/ImportExportServices';
import MarineEquipmentSourcing from './components/MarineEquipmentSourcing';
import LocalManufacturingSolutions from './components/LocalManufacturingSolutions';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-gray-900">
        <Header activeSection="home" />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/marine-spare-parts" element={<MarineSpareParts />} />
          <Route path="/services/ship-technical-support" element={<ShipTechnicalSupport />} />
          <Route path="/services/engineering-inspections" element={<EngineeringInspections />} />
          <Route path="/services/emergency-deliveries" element={<EmergencyDeliveriesSuezCanal />} />
          <Route path="/services/import-export" element={<ImportExportServices />} />
          <Route path="/services/marine-equipment-sourcing" element={<MarineEquipmentSourcing />} />
          <Route path="/services/local-manufacturing" element={<LocalManufacturingSolutions />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
