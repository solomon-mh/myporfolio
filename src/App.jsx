/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./components/Education";
import Work from "./components/Work";
import { createContext, useState } from "react";
import { darkModeStyle, lightModeStyle } from "./styles/themeStyles";
// eslint-disable-next-line react-refresh/only-export-components
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
    <darkModeProvider.Provider value={contextValue}>
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
