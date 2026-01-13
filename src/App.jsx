import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Programs from './pages/Programs';
import Footer from './components/Footer';


function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </>
  )
}

export default App
