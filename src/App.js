
import WeatherMode from './components/WeatherMode'
import Header from './components/Header'
import Home from './components/Home'
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';

//const apiKey = '25cd6c1f94edbabc663aec7fd32b3bf0'




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
          <Route path='/About us'>
            {/* staff memeber page */}
            <Header currentPage='About us' />
            <p>This is a collaboratively webapp made my programming students who are learning, This is a trial project that we have
            created to learn somethings. If there are any inprovements please feel free to tell us about them. </p>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
