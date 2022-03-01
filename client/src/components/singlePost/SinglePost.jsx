import React from "react";

// Hooks
import { useEffect } from "react";
import { useState } from "react";

// Router dom
import { useLocation } from "react-router-dom";

// Styles
import "./singlePost.css";

// Server
import { SERVER_URL } from "../../config";

// Axios
import axios from "axios";

import { useContext } from "react";
import { Context } from "../../context/Context";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`${SERVER_URL}/posts/${path}`);

      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.description);
    };

    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${SERVER_URL}/posts/${path}`, {
        data: {
          username: user.username,
        },
      });

      window.location.replace("/");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${SERVER_URL}/posts/${path}`, {
        username: user.username,
        title,
        description: desc,
      });

      window.location.reload();
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImage" src={PF + post.photo} alt="image" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-regular fa-pen-to-square"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fa-solid fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:{" "}
            <a href={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </a>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescriptionInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDescription">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
