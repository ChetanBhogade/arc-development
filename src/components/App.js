import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import CustomSoftware from "./CustomSoftware";
import Estimate from "./Estimate";
import LandingPage from "./LandingPage";
import MobileApps from "./MobileApps";
import Revolution from "./Revolution";
import Services from "./Services";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import theme from "./ui/Theme";
import Websites from "./Websites";

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
          <Route
            path="/revolution"
            element={
              <Revolution
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About setValue={setValue} setSelectedIndex={setSelectedIndex} />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route
            path="/estimate"
            element={
              <Estimate
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
        </Routes>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
