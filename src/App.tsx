import "./styles/css/app.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import Contact from "./pages/Contact";

export default function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    console.log(windowWidth);
    if (windowWidth <= 480) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <MainLayout isMobile={isMobile}>
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile} />} />
          <Route path="/terminos-de-servicio" element={<TermsOfService />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/politica-de-envios" element={<ShippingPolicy />} />
          <Route path="/politica-de-devoluciones" element={<ReturnPolicy />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
