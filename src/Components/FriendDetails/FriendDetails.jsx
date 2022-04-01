import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ShowFriendDetails from "../ShowFriendDetails/ShowFriendDetails";
const FriendDetails = () => {
  const params = useParams();
  const [users, setUsers] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const {name , username, email,phone, website } = users;
  console.log(name, username, email, phone, website);

  return (
    <div>
      <h1>Details About Friends : {params.friendId} </h1>
      <p><b>Name : </b>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </div>
  );
};

export default FriendDetails;
