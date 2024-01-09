import Navbar from "./Navbar";
// import Button from "./Button";

const User = ({ employees }) => {
  // console.log(employees)
  return (
    <div className="tablebox">
      <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Positon</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.lastname}</td>
                <td>{data.position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
