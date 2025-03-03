import { Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import ProfilPage from "./pages/ProfilPages";
import SignUpPage from "./pages/SignUpPage";
import WhislistPage from "./pages/WishlistPage";
import { lazy, Suspense } from "react";
// import CounterPage from "./pages/CounterPage";

const CounterPage = lazy(() => import("./pages/CounterPage"));

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/whislist" element={<WhislistPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <CounterPage /> 
            </Suspense>
          }
        />
        <Route path="/profile/:username" element={<ProfilPage />} />
      </Routes>
    </>
  );
}

export default App;
