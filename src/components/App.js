import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomSoftware from "./CustomSoftware";
import LandingPage from "./LandingPage";
import MobileApps from "./MobileApps";
import Services from "./Services";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import theme from "./ui/Theme";
import Websites from "./Websites";

const Revolution = () => <div>revolution</div>;
const About = () => <div>about</div>;
const Contact = () => <div>contact</div>;
const Estimate = () => <div>estimate</div>;

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            path="/services"
            element={
              <Services
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            path="/custom-software"
            element={
              <CustomSoftware
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            path="/mobile-apps"
            element={
              <MobileApps
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            path="/websites"
            element={
              <Websites
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route path="/revolution" element={<Revolution />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/estimate" element={<Estimate />} />
        </Routes>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
