import './App.css';
import Nav from './Nav'
import About from './About'
import Shop from "./Shop";
import Dynamic from "./Dynamic";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
     <Nav/>
     <Switch>
     <Route path="/" exact component={Home}/>
     <Route path="/about" exact component={About}/>
     <Route path="/shop" exact component={Shop}/>
     <Route path="/dynamic/:id" exact component={Dynamic}/>
     </Switch>
     </Router>

    </div>
  );
}
const Home= () =>{
  return(
  <div>
  <h1>Home Page</h1>
  </div>
  )
}

export default App;
