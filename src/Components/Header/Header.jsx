import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <h1>Learning React Router 🚀</h1>

      {/* // Navs */}
      <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/about">About us</Link> */}

        {/* Custom link */}
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/friends">Friends</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/posts">Posts</CustomLink>

        {/* Anchors */}

        {/* <a href="/">Home</a>
        <a href="/friends">Friends</a>
        <a href="/about">About us</a> */}
      </nav>
    </div>
  );
};

export default Header;
