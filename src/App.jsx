import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./components/Education";
import Work from "./components/Work";
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Education />} />
            <Route path='/work' element={<Work />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
