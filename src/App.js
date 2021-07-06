
import WeatherMode from './components/WeatherMode'
import Header2 from './components/Header'
import Home from './components/Home'
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';




//const apiKey = '25cd6c1f94edbabc663aec7fd32b3bf0'

function App() {
  return (
    <Router>
      <Header2 />
        <Switch>
          <Route exact path="/">
            {/* landing page */}
            <Home />
          </Route>
          <Route path='/App'>
            {/* actual app */}
            lol this is the app page
            <WeatherMode />
          </Route>
          <Route path='/team'>
            {/* staff memeber page */}
            lol this is teams app
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
