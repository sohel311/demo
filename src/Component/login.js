import React from "react";
import {useSelector} from 'react-redux';


	const Login = ({history}) => {
		const check =localStorage.getItem('session');
		const logs = useSelector(state => state.log_check.logs);
		if(check === null)
		{

			const check_login = (e) => {
				e.preventDefault();
				logs.map(log => {
					if (log.username === e.target.abv.value && log.password === e.target.abc.value) {
						alert("login sucsess");
						localStorage.setItem('session', e.target.abv.value);
						history.push('/user_page');

					}
					else if (log.username !== e.target.abv.value && log.password !== e.target.abc.value) {
						alert("login failed");
					}
				})

			}
			return (
				<div className="login-box">
					<h2>User Login</h2>
					<form onSubmit={check_login}>
						<input type="text" name="abv" placeholder="Username"/>
						<input type="text" name="abc" placeholder="Password"/>

						<button type="submit">LogIn</button>

					</form>

				</div>
			);
		}
		else if(localStorage.getItem('session') !== null)
		{
			history.push('/user_page');
		}
		return (
			<div></div>
		);
	}



export default Login;

