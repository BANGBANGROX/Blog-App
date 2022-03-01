import React from "react";
import Header from "../../components/header/Header";

// Styles
import "./home.css";

// Components
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

// Hooks
import { useState } from "react";
import { useEffect } from "react";

// Axios
import axios from "axios";

// Server
import { SERVER_URL } from "../../config";

// Router-dom
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${SERVER_URL}/posts/${search}`);

      setPosts(res.data);
    };

    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
