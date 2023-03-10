import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, AboutUs, Signin } from './pages';
import { Navbar } from './components';

const App = () => {
  return (
    <Router>
      <div className="relative z-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
