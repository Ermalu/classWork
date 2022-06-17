import { useScrollTrigger } from "@mui/material";
import React from "react";

const Section = ({ users }) => {
  return (
    <div>
      <div className="list_container">
        <table className="list">
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Id</th>
          </tr>
          {users.map(item => (
            <tr>
              <td>{item.name}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Section;
