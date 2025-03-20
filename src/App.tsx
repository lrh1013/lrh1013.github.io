import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import Layout from "@/layout/Layout";
import Work from "@/pages/Work";
import About from "@/pages/About";
import Practice from "@/pages/Practice";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
