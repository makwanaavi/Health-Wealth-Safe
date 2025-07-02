import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";
import Loader from "./components/LoadingScreen";
import MainLayout from "./components/MainLayout";
import SMS from "./components/SMS";
import Documents from "./components/Documents";
import Devices from "./components/Devices";
import VideoCall from "./components/VideoCall";
import Profile from "./components/Profile";
import HealthRecords from "./components/HealthRecords";
import ExamRoom from "./components/ExamRoom";

// Lazy Load Components
const LoginPage = lazy(() => import("./components/ui/LoginPage"));
const SignUp = lazy(() => import("./components/ui/SignUp"));
const Dashboard = lazy(() => import("./components/ui/Dashboard"));
const Chat = lazy(() => import("./components/Chat"));
const Questionnaires = lazy(() => import("./components/Questionnaires"));

// ✅ Loader Component

// ✅ LoaderWrapper – Show loader 2s before rendering the actual component
const WithLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : children;
};

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <WithLoader>
                <LoginPage />
              </WithLoader>
            }
          />
          <Route
            path="/sign-up"
            element={
              <WithLoader>
                <SignUp />
              </WithLoader>
            }
          />
          <Route path="/" element={<MainLayout />}>
            <Route
              path="dashboard"
              element={
                <WithLoader>
                  <Dashboard />
                </WithLoader>
              }
            />
            <Route
              path="questionnaires"
              element={
                <WithLoader>
                  <Questionnaires />
                </WithLoader>
              }
            />
            <Route
              path="chat"
              element={
                <WithLoader>
                  <Chat />
                </WithLoader>
              }
            />

            <Route
              path="sms"
              element={
                <WithLoader>
                  <SMS />
                </WithLoader>
              }
            />

            <Route
              path="documents"
              element={
                <WithLoader>
                  <Documents />
                </WithLoader>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
