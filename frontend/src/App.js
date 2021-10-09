
import './App.css';
import Us from "./components/Us";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nosotros" component={Us} />
          <Route exact path="/galeria" component={Gallery} />
          <Route exact path="/contacto" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
