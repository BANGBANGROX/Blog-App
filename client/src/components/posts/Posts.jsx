import React from "react";

// Styles
import "./posts.css";

// Components
import Post from "../post/Post";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post, ind) => (
        <Post key={ind} post={post} />
      ))}
    </div>
  );
};

export default Posts;
