import "./App.css";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <div className="text-lg text-blue-500">Users</div>
    </>
  );
}

export default App;
