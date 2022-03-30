import React from "react";
import { useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { id, name, username, email } = props.friends;

  //setting up navigate
  const navigate = useNavigate();

  const showFriendDetail = () => {
    const path = `/friends/${id}`;
    navigate(path);
  };
  return (
    <div>
      <h3>Name : {name}</h3>
      <h5>Email : {email}</h5>
      <button onClick={showFriendDetail}>
        {username} : {id}
      </button>
    </div>
  );
};

export default Friend;
