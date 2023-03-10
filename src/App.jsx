import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home, AboutUs } from './pages';
import { Navbar } from './components';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
