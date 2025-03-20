import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main id="main" role="main">
        <div className="page-container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
