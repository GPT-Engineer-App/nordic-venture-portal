import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import AreasOfInterest from "./pages/AreasOfInterest.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/areas-of-interest" element={<AreasOfInterest />} />
      </Routes>
    </Router>
  );
}

export default App;