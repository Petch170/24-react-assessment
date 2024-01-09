import { useState } from "react";
import Navbar from "./Navbar";
// import Button from "./Button";

const Admin = ({ employees, setEmployees, delData }) => {
  // console.log(employees)

  const [name, setName] = useState();
  const [lastname, setLastname] = useState();
  const [position, setPosition] = useState();

  function saveButton(e) {
    e.preventDefault(); //

    const id = Math.floor(Math.random() * 100);
    const showData = {
      id: id,
      name: name,
      lastname: lastname,
      position: position,
    };
    // console.log("this is a",showData)
    setEmployees([...employees, showData]);
  }

  return (
    <div>
      <div>
      <h1>Create User Here</h1> 
        <form className="formbox">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            onChange={(e) => setPosition(e.target.value)}
          />
          <button className="savebtn" onClick={saveButton}> Save</button>
        </form>
      </div>
      <div className="tablebox">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Positon</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((data) => {
              return (
                <tr key={data.id}>
                  <td> {data.name}</td>
                  <td> {data.lastname}</td>
                  <td> {data.position}</td>
                  <td>
                    <button className="del" onClick={() => delData(data.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Admin;
