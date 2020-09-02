import React from "react";
import { Redirect , Switch , Route} from 'react-router-dom';
import userEvent from "@testing-library/user-event";

const Login = (props) =>{

        const check_login = (e) =>{
            e.preventDefault();
            props.logs.map(log=>{
                if(log.username == e.target.abv.value && log.password == e.target.abc.value)
                {
                    console.log("sucsess");
                }
                else if(log.username != e.target.abv.value && log.password != e.target.abc.value)
                {
                    console.log("not matched");
                }
            })

        }
    return(
        <div className="login-box">
            <h2>User Login</h2>
            <form onSubmit={check_login}>
                <input type="text" name="abv" placeholder="Username"/>
                <input type="text" name="abc" placeholder="Password"/>

                <button type="submit" >LogIn</button>

            </form>

        </div>
    );
}

export default Login;