// import "./App.css";
// import LoginPage from "./components/ui/LoginPage";

// function App() {
//   return (
//     <>
//       <LoginPage />
//     </>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/ui/SignUp';
import Dashboard from './components/ui/Dashboard';
import LoginPage from "./components/ui/LoginPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< LoginPage/>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
