import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Formies from "./pages/Formies.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Results from "./pages/Results.js";
import './App.css';
import Formies from './Formies';
import Login from './Login';
import Register from './Register';
import Results from './Results'


<<<<<<< HEAD
class App extends Component {

  //put react routes for Components/pages here//

  render() {

    return(
      <div id="mainbody">
      <Register/>



     </div>

);




  }
}

=======
>>>>>>> 2f39a178781bdd27201ee5709870443c024d5138

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/form" component={Formies} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </div>
  </Router>;

export default App;

