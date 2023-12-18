/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./components/Education";
import Work from "./components/Work";
import { createContext, useState } from "react";
export const darkModeProvider = createContext();
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const darkModeStyle = {
    backgroundColor: "var(--body-color)",
    color: "#fff",
    width: "100%",
    overflow: "hidden",
  };
  const lightModeStyle = {
    backgroundColor: "#fff",
    color: "#000",
    width: "100%",
    overflow: "hidden",
    height: "fit-content",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 0,
    margin: 0,
  };
  const isDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <darkModeProvider.Provider value={isDarkMode}>
      <Router>
        <div style={darkMode ? darkModeStyle : lightModeStyle}>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route index element={<Education />} />
              <Route path='/work' element={<Work />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </darkModeProvider.Provider>
  );
}

export default App;
