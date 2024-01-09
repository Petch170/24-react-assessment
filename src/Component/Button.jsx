import { useState } from "react";
import Admin from "./Admin";
import User from "./User";

const Button = (props) => {
const setBtn = props.btn

  return (
    <div>
      <button onClick={()=>setBtn("user")}>User Home Sector</button>
      <button onClick={()=>setBtn("admin")}>Admin Home Sector</button>
    </div>
  );
};

export default Button;
