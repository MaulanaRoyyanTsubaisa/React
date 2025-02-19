import SignUpPage from "./pages/SignUpPage";
import ProfilPage from "./pages/ProfilPages";
import WhislistPage from "./pages/WishlistPage";
import { Toaster } from "sonner";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/whislist" element={<WhislistPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/" element={<CounterPage />} />
        <Route path="/profile/:username" element={<ProfilPage/>} />
      </Routes>
    </>
  );
}

export default App;
