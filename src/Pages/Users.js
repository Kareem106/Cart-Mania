import { useContext } from "react";
import Table from "react-bootstrap/Table";
import { UsersContext } from "../Context/UsersContext";
import React from "react";
import { Button } from "bootstrap";
export default function Users() {
  const { usersData } = useContext(UsersContext);
  return (
    <>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => {
            return <TableRow user={user}></TableRow>;
          })}
        </tbody>
      </Table>
    </>
  );
}
function TableRow({ user }) {
  const {deleteSelectedUser,updateEmail,updatePassword}=useContext(UsersContext);
  return (
    <tr>
      <td>
        <div className="d-flex justify-content-between align-items-center">
          {user?.email}
          <button
          onClick={()=>updateEmail(user)}
            style={{
              width: "10rem",
            }}
            className="btn bg-primary text-light"
          >
            edit
          </button>
        </div>
      </td>
      <td>
        <div className="d-flex justify-content-between align-items-center">
          {user?.password}
          <button
          onClick={()=>updatePassword(user)}
            style={{
              width: "10rem",
            }}
            className="btn bg-primary text-light"
          >
            edit
          </button>
        </div>
      </td>
      <td>
        <div className="d-flex justify-content-center align-items-center">
          <button
          onClick={
            ()=>{deleteSelectedUser(user)}
          }
          className="btn w-100 bg-danger text-light text-center">
            Delete Accout
          </button>
        </div>
      </td>
    </tr>
  );
}
