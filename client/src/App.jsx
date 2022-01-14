import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AppModals from "./components/Modals/AppModals";
import { HomePage } from "./pages/HomePage";
import { Dashboard } from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <AppModals />
    </Router>
  );
};

export default App;
