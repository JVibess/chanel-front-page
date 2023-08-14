import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import HauteCouture from "./pages/HauteCouture";
import Navbar from "./components/NavBar";
import CcBeach from "./pages/ccbeach/CcBeach";
import CocoBeach from "./pages/CocoBeach";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CocoBeach" element={<CcBeach />} />
        <Route path="/HauteCouture" element={<HauteCouture />} />
      </Routes>
    </>
  );
}

export default App;
