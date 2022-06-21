import "./App.css";
import { Welcome } from "./pages";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route to="/" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
