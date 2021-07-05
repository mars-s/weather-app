import { Container } from '@material-ui/core'
import WeatherMode from './components/WeatherMode'
import Header2 from './components/Header2'
import Home from './components/Home'
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';




//const apiKey = '25cd6c1f94edbabc663aec7fd32b3bf0'

function App() {
  return (
    <Router>
      <Header2 />
        <Container>
          <Switch>
            <Route exact path="/">
              {/* landing page */}
              <Home />
            </Route>
            <Route path='/App'>
              {/* actual app */}
              <WeatherMode />
            </Route>
          </Switch>
        </Container>
    </Router>
  );
}

export default App;
