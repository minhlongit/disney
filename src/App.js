import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
