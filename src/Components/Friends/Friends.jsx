import React from "react";
import { useState, useEffect } from "react";
import Friend from "../Friend/Friend";

const Friends = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h2>Hello ! Freinds </h2>
      <p> How are You ?</p>
      {users.map((user) => (
        <Friend key={user.id} friends={user}></Friend>
      ))}
    </div>
  );
};

export default Friends;
