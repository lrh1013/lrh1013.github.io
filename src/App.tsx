import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '@/pages/Home';
import Project from '@/pages/Project';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageLayout from '@/components/layout/PageLayout';
import SmoothScroll from '@/components/common/SmoothScroll';

function App() {
  const location = useLocation();

  return (
    <>
      <SmoothScroll />
      <Header />
      <main role="main">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route element={<PageLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<Project />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;
