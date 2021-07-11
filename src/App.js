
import WeatherMode from './components/WeatherMode'
import Header from './components/Header'
import Home from './components/Home'
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';

//




function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            {/* landing page */}
            <Header currentPage='home' />
            <Home />
          </Route>
          <Route path='/App'>
            {/* actual app */}
            <Header currentPage='app' />
            <WeatherMode />
          </Route>
          <Route path='/team'>
            {/* staff memeber page */}
            <Header currentPage='team' />
            lol this is teams app
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
