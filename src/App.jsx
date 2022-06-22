import { Routes, Route } from "react-router-dom";
import { Experience, Home, WorkSpace } from "./pages";
import { Layout } from "./component";
import "./App.css";

function App() {
  return (
    <div className="app flex-col justify-center items-center">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/workspace" element={<WorkSpace />} />
          <Rouet path="/experience" element={<Experience />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
