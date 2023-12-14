import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import Services from "./components/Services";
import MiniProject from "./components/MiniProject";
import Contact from "./components/Contact";
import ContactBanner from "./components/ContactBanner";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <ContactBanner />
        <Header />
        <main className="content">
          <Home />
          <Services />
          <MiniProject />
          <AboutUs />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
