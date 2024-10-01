import React, { useEffect, useRef, useState } from "react";
import { links, icons } from "./menu-data";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight + 10}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <NavLink to="/" exact>
            <img
              src={process.env.PUBLIC_URL + "/temp.png"}
              alt="logo"
              className="nav-logo"
            />
          </NavLink>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div className={"links-container"} ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link, index) => {
              const { title, url } = link;

              return (
                <li key={index}>
                  <NavLink to={url} activeClassName="active-link" exact>
                    {title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {icons.map((icons, index) => {
            const { icon, url } = icons;

            return (
              <li key={index}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
