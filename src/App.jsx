import Header from "./components/Header";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/PortfolioWithTailwind" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
