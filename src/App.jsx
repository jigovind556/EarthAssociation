import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import GalleryModal from "./context/GalleryModal";
import { GalleryProvider } from "./context/GalleryContext";

function App() {
  return (
    <div id="detail">
      <GalleryProvider>
        <ScrollToTop />
        <Header />
        <Outlet />
        <GalleryModal />
        <Footer />
      </GalleryProvider>
    </div>
  );
}

export default App;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
