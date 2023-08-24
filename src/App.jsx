import { useEffect, useState } from "react";
import "./App.css";
import ProfileContainer from "./ProfileCard/ProfileContainer";
import dataArr from "./data";

function App() {
  const [users, setUsers] = useState([]);

  const manipulation = (arr) => {
    return arr.map((element) => {
      const newName = `${element.first} ${element.last}`;

      let birthDate = new Date(element.dob);
      let today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      return {
        ...element,
        name: newName,
        age: age,
      };
    });
  };

  useEffect(() => {
    const arr = manipulation(dataArr);
    setUsers([...arr]);
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    const userArr = users.filter((user) => user.id !== id);
    console.log(userArr);
    setUsers(userArr);
  };

  return (
    <div className="List">
      <div className="searchBox">
        <i
          className="fa-solid fa-magnifying-glass"
          style={{ color: "#8C92AC" }}
        ></i>
        <input type="text" placeholder="Search User" />
      </div>
      {users.map((user) => (
        <ProfileContainer
          key={user.id}
          handleDelete={handleDelete}
          user={user}
        />
      ))}
    </div>
  );
}

export default App;
