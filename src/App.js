import React from 'react';

import {Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/Homepage/Homepage.pages'
import SignUp from './pages/SignUp/SignUp.pages';
import SignIn from './pages/SignIn/SignIn.pages';
import Sample from './pages/Sample/SamplePage';
// import ButtonPage from './Components/button.component/button.components'
import Invoice from './pages/DashBoard/Dashboard.pages';

function App() {
  return (
   <div>
      <switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/signin' component={SignIn}/>
      <Route exact path='/dashboard' component={Invoice}/>
      <Route exact path='/sample' component={Sample}/>
      </switch>
   </div>
  );
}
 
export default App;
