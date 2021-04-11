import { Switch, Route } from 'react-router-dom'

// Views
import Home from './view/Home'
import About from './view/About'
import Events from './view/Events';
import Directory from './view/Directory';
import News from './view/News';
import ContactUs from './view/ContactUs';
import Covid19 from './view/Covid19';
import Shop from './view/Shop';
import ForOhFour from './view/NotFound'

// Components
import './App.css';
import TopNav from './controller/nav-control/TopNav';
import FooterNav from './controller/nav-control/FooterNav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
        <Route path='/directory' component={Directory} />
        <Route path='/news' component={News} />
        <Route path='/contact' component={ContactUs} />
        <Route path='/covid19' component={Covid19} />
        <Route path='/shop' component={Shop} />
        <Route path='*' component={ForOhFour} />
      </Switch>
      <FooterNav />
    </div>
  );
}

export default App;
