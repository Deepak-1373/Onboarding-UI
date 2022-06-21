import "./App.css";
import { Button, Input } from "./component";

function App() {
  return (
    <div className="app">
      <h1>Onboarding-UI</h1>
      <Input type="text" placeholder="Steve Jobs" />
      <Button text="Create Workspace" />
    </div>
  );
}

export default App;
