import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';


const App = () => {
  return (<>
     <Switch>
         <Route exact path='/'><SignIn/></Route>
         <Route exact path='/home'><Home/></Route>
     </Switch>   
     
  </>
      
  )
};

export default App;
