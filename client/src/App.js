import { Switch, Route } from 'react-router-dom'
import Home from './view/Home'
import ForOhFour from './view/NotFound'

import './App.css';
import TopNav from './controller/nav-control/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='*' component={ForOhFour} />
      </Switch>
    </div>
  );
}

export default App;
