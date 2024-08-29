/* eslint-disable react-refresh/only-export-components */
import Home from "./pages/Home";

import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Home />
      </div>
    </Router>
  );
}

export default App;
