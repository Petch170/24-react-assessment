import Navbar from "./Navbar";
import Button from "./Button";
import { useEffect, useState } from "react";
import User from "./User";
import Admin from "./Admin";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [employees, setEmployees] = useState(mockEmployees);
  const [btn, setBtn] = useState("");

  useEffect(() => {
    setEmployees(mockEmployees);
  }, []);

  const delData = (id) => {
    const dataFilter = employees.filter((data) => data.id !== id);
    setEmployees(dataFilter);
    // console.log(id);
    // console.log(dataFilter);
  };

  return (
    <div>
      <Navbar />
      {btn === "user" ? (
        <h1>Generation Thailand Home - User Sector</h1>
      ) : btn === "admin" ? (
        <h1>Generation Thailand Home - Admin Sector</h1>
      ) : (
        <h1>Generation Thailand React - Assessment</h1>
      )}
      <Button btn={setBtn} />
      {btn === "user" ? (
        <User employees={employees} />
      ) : btn === "admin" ? (
        <Admin
          employees={employees}
          setEmployees={setEmployees}
          delData={delData}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
