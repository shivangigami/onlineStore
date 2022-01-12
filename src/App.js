
import './App.css';
import LoginPage from './components/login';
import RegisterPage from './components/register';
import {Switch, Route} from 'react-router-dom'
import './assets/common.css'

function App() {
  return (
    <div className="App">
     <Switch>
  <Route exact path="/" component={LoginPage} />
  <Route path='/register' component={RegisterPage}/>
  
</Switch>
    </div>
  );
}

export default App;
