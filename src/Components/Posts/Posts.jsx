import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  // console.log(posts.map(post => console.log(post.id)));
  return (
    <div>
      {posts.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          {post.id}
        </Link>
      ))}
      <Outlet />
    </div>
  );
};

export default Posts;
