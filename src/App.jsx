import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import AreasOfInterest from "./pages/AreasOfInterest.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/areas-of-interest" element={<AreasOfInterest />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;