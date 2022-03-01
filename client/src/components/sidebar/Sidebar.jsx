import React from "react";

// Hooks
import { useState } from "react";
import { useEffect } from "react";

// Axios
import axios from "axios";

// Styles
import "./sidebar.css";

// Server
import { SERVER_URL } from "../../config";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(`${SERVER_URL}/categories`);

      setCats(res.data);
    };

    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://www.indiewire.com/wp-content/uploads/2021/10/Screenshot-136.png?w=780"
          alt="image"
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium,
          non nobis repellendus vel vitae inventore hic vero. .
        </p>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map((cat, ind) => (
              <a href={`/?cat=${cat.name}`} key={ind} className="link">
                <li className="sidebarListItem">{cat.name}</li>
              </a>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <span className="sidebarSocial"></span>
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
