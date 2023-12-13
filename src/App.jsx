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
  };
  const lightModeStyle = {
    backgroundColor: "#fff",
    color: "#000",
  };
  const isDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <div style={darkMode ? darkModeStyle : lightModeStyle}>
      <darkModeProvider.Provider value={isDarkMode}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route index element={<Education />} />
              <Route path='/work' element={<Work />} />
            </Route>
          </Routes>
        </Router>
      </darkModeProvider.Provider>
    </div>
  );
}

export default App;
