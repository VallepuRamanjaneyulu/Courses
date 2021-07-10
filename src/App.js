import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import C from './Components/C';
import Java from './Components/Java';
import Python from './Components/Python';


function App() {
  return (
    <div className="App">
     <>
                <div className="title">
                    Courses List
                </div>
                <div className="content">
                    <form>
                     
        <Router>
  <Link to = '/C'><button>C</button></Link>&nbsp;&nbsp;&nbsp;
  <Link to = '/Java'><button>Java</button></Link>&nbsp;&nbsp;
  <Link to = '/Python'><button>Python</button></Link>&nbsp;&nbsp;
 
<Switch>
  <Route path="/C" component={C} />
  <Route path="/Java" component={Java} />
  <Route path="/Python" component={Python} />
  

  </Switch>

</Router>
                    </form>
                </div>
            </>
    </div>
  );
}

export default App;
