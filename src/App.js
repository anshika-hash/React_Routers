
import './App.css';
import Form from './components/Form';
import Nav from './components/Nav';
import Contact from './components/Contact';
import About from './components/About';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Services from './components/Services';
import Home from './components/Home';

function App() {
  return (
    <div className="App">

        <Nav></Nav>
        <Switch>
          <Route exact path='/' component={Home}></Route>
        <Route  path='/form' component={Form}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path="/services" render={()=>{
          <Services name='Services' />
        }}> Services </Route>
        <Route component={Error}></Route>
        </Switch>
      </div>
  );
}

export default App;
