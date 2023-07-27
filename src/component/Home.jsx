import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../utils/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.user);
  const handleDelete = (id) => {
    console.log("///", id);
    dispatch(deleteUser(id));
    alert("deleted successfully");
  };
  console.log(users);
  return (
    <div className="container">
      <Link to="/create">
        <button className="btn btn-success my-3"> create +</button>
      </Link>
      <table className="table table-striped">
        <thead>
          <tr className="bg-gray">
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}.</th>
              <td> {user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(user.id)}>
                  Delete {user.id}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
