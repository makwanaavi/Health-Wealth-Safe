import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";

const MainLayout = lazy(() => import("./components/MainLayout"));
const LoginPage = lazy(() => import("./components/ui/LoginPage"));
const SignUp = lazy(() => import("./components/ui/SignUp"));
const Dashboard = lazy(() => import("./components/ui/Dashboard"));
const Chat = lazy(() => import("./components/Chat"));
const Questionnaires = lazy(() => import("./components/Questionnaires"));
const Documents = lazy(() => import("./components/Documents"));
const HealthRecords = lazy(() => import("./components/HealthRecords"));
const ExamRoom = lazy(() => import("./components/ExamRoom"));
const Profile = lazy(() => import("./components/Profile"));
const VideoCall = lazy(() => import("./components/VideoCall"));
const Devices = lazy(() => import("./components/Devices"));
const SMS = lazy(() => import("./components/SMS"));
const Loader = lazy(() => import("./components/LoadingScreen"));

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
          {/* Auth routes (no MainLayout) */}
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

          {/* Main app routes (with MainLayout) */}
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
            <Route
              path="healthrecords"
              element={
                <WithLoader>
                  <HealthRecords />
                </WithLoader>
              }
            />
            <Route
              path="devices"
              element={
                <WithLoader>
                  <Devices />
                </WithLoader>
              }
            />
            <Route
              path="video-call"
              element={
                <WithLoader>
                  <VideoCall />
                </WithLoader>
              }
            />
            <Route
              path="profile"
              element={
                <WithLoader>
                  <Profile />
                </WithLoader>
              }
            />
            <Route
              path="exam-room"
              element={
                <WithLoader>
                  <ExamRoom />
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
