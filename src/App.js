
import WeatherMode from './components/WeatherMode'
import Header from './components/Header'
import Home from './components/Home'
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import TeamSection from './components/TeamSection';
import PageNotFound from './components/404-page';

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
          <Route exact path='/App'>
            {/* actual app */}
            <Header currentPage='app' />
            <WeatherMode />
          </Route>
          <Route exact path='/Aboutus'>
            {/* staff memeber page */}
            <Header currentPage='Aboutus' />
            <TeamSection />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
    </Router>
  );
}

export default App;
