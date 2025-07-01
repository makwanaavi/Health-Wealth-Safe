import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";
import Loader from "./components/LoadingScreen";

// Lazy Load Components
const LoginPage = lazy(() => import("./components/ui/LoginPage"));
const SignUp = lazy(() => import("./components/ui/SignUp"));
const Dashboard = lazy(() => import("./components/ui/Dashboard"));

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
          <Route
            path="/dashboard"
            element={
              <WithLoader>
                <Dashboard />
              </WithLoader>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
