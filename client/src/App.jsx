import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AppModals from "./components/Modals/AppModals";
import { HomePage } from "./pages/HomePage";
import { DemoPage } from "./pages/DemoPage";
import { StudentSelection } from "./pages/StudentSelection";
import { Dashboard } from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/demo" element={<DemoPage />} />

          <Route path="/demo/student" element={<StudentSelection />} />
          <Route path="/demo/dashboard" element={<Dashboard />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <AppModals />
    </Router>
  );
};

export default App;
