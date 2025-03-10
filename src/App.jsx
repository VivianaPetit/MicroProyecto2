
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { LandingPage } from "./pages/LandingPage"; 
import LoginPage from "./pages/LoginPage"; 
import SignupPage from "./pages/SignupPage";
import DestinationPage from "./pages/DestinationPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/destinations" element={<DestinationPage />} />
      </Routes>
    </Router>
  );
}

export default App;