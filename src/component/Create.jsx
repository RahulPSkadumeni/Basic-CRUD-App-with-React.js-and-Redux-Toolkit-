import React, { useState } from "react";
import { addUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(name, email);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({ id: user[user.length - 1].id + 1, name: name, email: email })
    );
    navigate("/");
  };
  return (
    <div>
      \
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div> Add New User</div>
          <label for="exampleFormControlInput1">name</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            name="name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            name="name"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
