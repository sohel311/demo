import React from 'react';
import './App.css';
import UserHome from './Component/UserHome';
import Login from "./Component/login";
import AdminLogin from "./Component/AdminLogin";
import 'bootstrap/dist/css/bootstrap.css';
import { Switch , Route} from 'react-router-dom';
import {connect} from 'react-redux';

function App(props) {
    console.log(props.logs);
  return (
    <div className="App">
            <Switch>
                <Route path="/login" component={()=><Login logs={props.logs}></Login>}></Route>
                <Route path="/admin" component={AdminLogin}></Route>
                <Route path="/user_home" component={UserHome}></Route>
            </Switch>



    </div>
  );
}
const mapStateToProps = (state) =>{
    return{
        logs:state.logs
};
};
export default connect(mapStateToProps)(App);
