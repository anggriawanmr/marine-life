import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Home, AboutUs, Signin, Articles, ArticleDetails } from './pages';
import { Navbar } from './components';

const App = () => {
  const user = true;

  return (
    <Router>
      <div className="relative z-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/signin"
            element={user ? <Navigate to="/" /> : <Signin />}
          />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
