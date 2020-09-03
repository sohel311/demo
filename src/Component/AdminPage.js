import React from "react";
import {useSelector} from 'react-redux';
import {Add_data} from '../Action/StudAction.js';
import {useDispatch} from 'react-redux';
const Crud = ({history}) =>{
  const students = useSelector(state => state.Stud.details  );
  console.log(students);
  const logout = () =>{
    localStorage.clear();
    history.push("./login");
  }
  const dispatch = useDispatch();

  const add = (e) =>{
    console.log(e.currentTarget.id.value);
    e.preventDefault();
    const abc = e.currentTarget.id.value;
    const xyz = e.currentTarget.name.value;
    const rn = e.currentTarget.rn.value;


    const new_data = {
       id:abc,
       name:xyz,
       RollNo:rn,
    }
    dispatch(Add_data(new_data));
    console.log(e.currentTarget.id.value);
  }
    return(
        <div>
          <h1>***** Welcome {localStorage.getItem('session')}****</h1>
            <form onSubmit={add}>
            <table border="1">
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td><input name="id" /></td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td><input name="name" /></td>
                    </tr>
                    <tr>
                        <td>Roll NO.</td>
                        <td><input name="rn" /></td>
                    </tr>
                </tbody>
            </table>

                    <button type="submit">Submit</button>
                    <a onClick={logout}>Logout</a>

            </form>
          <div className="user">

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

          </div>
        </div>
    );
}
export default Crud;