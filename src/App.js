import { Pane } from 'evergreen-ui'
import WeatherMode from './components/WeatherMode'
import Header from './components/Header'
import Home from './components/Home'
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';




//const apiKey = '25cd6c1f94edbabc663aec7fd32b3bf0'

function App() {
  return (
    <Router>
        <Pane width={500} margin={"auto"}>
          <Header />
          <Switch>
            <Route exact path="/">
              {/* landing page */}
              <Home />
            </Route>
            <Route path='App'>
              {/* //actual app */}
              <WeatherMode />
            </Route>
          </Switch>
        </Pane>
    </Router>
  );
}

export default App;
