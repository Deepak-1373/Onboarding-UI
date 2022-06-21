import { Routes, Route } from "react-router-dom";
import { Welcome } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="app flex-col justify-center items-center">
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
