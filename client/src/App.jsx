import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AppModals from "./components/Modals/AppModals";
import { EdgyksLanding } from "./pages/EdgyksLanding";
import { HomePage } from "./pages/HomePage";
import { DemoPage } from "./pages/DemoPage";
import StudentSelection from "./pages/StudentSelection";
import { Dashboard } from "./pages/Dashboard";
// import ChatPage from "./pages/ChatPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<EdgyksLanding />} />
          <Route path="/ava" element={<HomePage />} />
          <Route path="/ava/demo" element={<DemoPage />} />

          <Route path="/ava/demo/student" element={<StudentSelection />} />
          {/* <Route path="/demo/student/chat" element={<ChatPage />} /> */}
          <Route path="/ava/demo/dashboard" element={<Dashboard />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <AppModals />
    </Router>
  );
};

export default App;
