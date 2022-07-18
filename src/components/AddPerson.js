import React, { useState } from "react";
function AddPerson(props) {
  const [data, setData] = useState({
    username: undefined,
    email: undefined,
    color: true,
  });

  let setValues = (e) => {
    let id = e.target.id;
    data[id] = e.target.value;
  };

  let save = (e) => {
    e.preventDefault();
    props.addedPerson(data);
    setData({
      username: "",
      email: "",
    });
  };

  return (
    <div>
      <form onSubmit={save}>
        <label>Enter your username</label>
        <input
          onChange={setValues}
          id="username"
          type="text"
          value={data.username}
        />

        <label>Enter your email</label>
        <input
          onChange={setValues}
          id="email"
          type="email"
          value={data.email}
        />

        <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default AddPerson;
