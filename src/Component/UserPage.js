import React from "react";
import {useSelector} from 'react-redux';
const User = ({history}) =>{
	const students = useSelector(state => state.Stud.details  );
	console.log(students);
	const logout = () =>{
		localStorage.clear();
		history.push("./login");
	}
	return(
		<div className="user">
			<h1>***** Welcome {localStorage.getItem('session')}****</h1>
			<table border="1" height="100" width="200">
				<thead>
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Roll_No</th>
				</tr>
				</thead>
				<tbody>
				{
					students.map(student=>(
						<tr>
							<th>{student.id}</th>
							<td>{student.name}</td>
							<td>{student.RollNo}</td>
						</tr>
					))
				}
				</tbody>
			</table>
			<div><button onClick={logout}>Logout</button></div>
		</div>
	);
}
export default User;