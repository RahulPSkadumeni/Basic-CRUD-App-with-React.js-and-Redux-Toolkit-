import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../utils/userSlice";

const Edit = () => {
  const params = useParams();
  const id = parseInt(params.id);
  console.log(id);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  console.log("user", user);
  const existingUser = user.filter((f) => f.id === id);
  console.log(existingUser[0]);
  const { name, email } = existingUser[0];
  const [uname, setUname] = useState(name);
  const [uemail, setUemail] = useState(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: id, name: uname, email: uemail }));
    // update the data in store and api here...
    console.log("haii");

    alert("Updated successfully");
    navigate("/");
  };
  return (
    <div>
      Edit
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div> Add New User</div>
          <label for="exampleFormControlInput1">name</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            name="name"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            name="name"
            value={uemail}
            onChange={(e) => setUemail(e.target.value)}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Edit;
