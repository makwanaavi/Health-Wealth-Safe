import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";

// Lazy Load Components
const LoginPage = lazy(() => import("./components/ui/LoginPage"));
const SignUp = lazy(() => import("./components/ui/SignUp"));
const Dashboard = lazy(() => import("./components/ui/Dashboard"));

// ✅ Loader Component
const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="relative">
      <div className="h-16 w-16 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 bg-white rounded-full animate-ping"></div>
    </div>
  </div>
);

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
