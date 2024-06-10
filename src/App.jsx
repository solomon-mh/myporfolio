/* eslint-disable react-refresh/only-export-components */
import Home from "./pages/Home";

import { createContext, useState } from "react";
import { darkModeStyle, lightModeStyle } from "./styles/themeStyles";
import { BrowserRouter as Router } from "react-router-dom";
export const darkModeProvider = createContext();
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  const contextValue = {
    darkMode,
    toggleDarkMode,
  };
  return (
    <Router>
      <darkModeProvider.Provider value={contextValue}>
        <div style={darkMode ? darkModeStyle : lightModeStyle}>
          <Home />
        </div>
      </darkModeProvider.Provider>
    </Router>
  );
}

export default App;
