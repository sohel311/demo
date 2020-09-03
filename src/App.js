import React from 'react';
import './App.css';
import Login from "./Component/login";
import AdminLogin from "./Component/AdminLogin";
import 'bootstrap/dist/css/bootstrap.css';
import { Switch , Route } from 'react-router-dom';
import Crud from "./Component/AdminPage";
import User from "./Component/UserPage";
function App(props) {
    console.log(props.logs);
  return (

      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/admin" component={AdminLogin} />
          <Route path="/admin_page" component={Crud} />
          <Route path="/User_page" component={User} />
        </Switch>
      </div>


  );
}

export default App;
