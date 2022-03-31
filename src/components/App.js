import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./ui/Header";
import theme from "./ui/Theme";

const Home = () => <div>Home</div>;
const Services = () => <div>services</div>;
const CustomSoftware = () => <div>customSoftware</div>;
const MobileApp = () => <div>mobileApp</div>;
const Websites = () => <div>websites</div>;
const Revolution = () => <div>revolution</div>;
const About = () => <div>about</div>;
const Contact = () => <div>contact</div>;
const Estimate = () => <div>estimate</div>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/custom-software" element={<customSoftware />} />
          <Route path="/mobile-app" element={<mobileApp />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/revolution" element={<Revolution />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/estimate" element={<Estimate />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
