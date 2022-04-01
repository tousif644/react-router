import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react/";

const Post = () => {
  const [posts, setposts] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      .then((res) => res.json())
      .then((data) => setposts(data));
  }, [params.postId]);

  return (
    <div>
      <h1>This Post Detail is : {params.postId} </h1>
      <h2>{posts.title}</h2>
      <h4>{posts.body}</h4>
    </div>
  );
};

export default Post;
