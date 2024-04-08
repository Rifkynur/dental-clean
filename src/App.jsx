import FooterComponent from "./components/FooterComponent";
import NavbarComponents from "./components/NavbarComponents";
import AboutPages from "./pages/AboutPages";
import HomePages from "./pages/HomePages";
import { Route, Routes } from "react-router-dom";
import ServicePages from "./pages/ServicePages";
import ContactPage from "./pages/ContactPage";
import NotFoundPages from "./pages/NotFoundPages";
import ToTop from "./components/ToTop";

function App() {
  return (
    <>
      <NavbarComponents />
      <Routes>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/about" element={<AboutPages />}></Route>
        <Route path="/services" element={<ServicePages />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/*" element={<NotFoundPages />}></Route>
      </Routes>
      <ToTop />
      <FooterComponent />
    </>
  );
}

export default App;
