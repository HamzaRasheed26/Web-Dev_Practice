import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Form from "./Components/form";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Form} />
      </Switch>
    </div>
  );
}

export default App;
