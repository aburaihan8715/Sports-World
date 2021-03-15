import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home /> 
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/league/:idLeague">
            <LeagueDetail />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
