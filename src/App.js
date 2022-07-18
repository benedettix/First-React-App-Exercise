import Person from "./components/Person";
import React, { useState, useEffect } from "react";
import AddPerson from "./components/AddPerson";

function App() {
  const [data, setData] = useState([
    {
      username: "programer",
      email: "benyx@gmail.com",
      id: 0,
      color: true,
    },
    {
      username: "baba",
      email: "baba@gmail.com",
      id: 1,
      color: true,
    },
  ]);

  useEffect(() => {
    let data = [];
    if (localStorage.data) {
      data = JSON.parse(localStorage.data);
    }
    setData(data);
  }, []);

  let colorChanger = (e) => {
    e.stopPropagation();
    let id = e.currentTarget.getAttribute("data-key");
    if (data[id]) {
      let dataCopy = [...data];
      dataCopy[id].color = !dataCopy[id].color;
      setData([...dataCopy]);
    }
  };

  let addedPerson = (user) => {
    user.id = Math.floor(Math.random() * 50);
    localStorage.data = JSON.stringify([...data, user]);
    setData([...data, user]);
  };
  return (
    <div>
      <AddPerson addedPerson={addedPerson} />
      <Person data={data} colorChanger={colorChanger} />
    </div>
  );
}

export default App;
