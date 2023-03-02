import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPaperPlane,
  faCopy,
  faBook,
  faUsers,
  faShoppingCart,
  faUser,
  faFilter,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

import SubMenu from "./subMenu"; 


const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>
      <FontAwesomeIcon icon={faBook} className="mr-2" />BOOK STORE  </h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>MAIN NAVIGATION</p>
        <NavItem>
          <NavLink tag={Link} to={"/about"}>
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink  tag={Link} to={"/about"}>
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Client
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink  tag={Link} to={"/about"}>
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
            Shearch
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"Book"}>
            <FontAwesomeIcon icon={faBook} className="mr-2" />
            BOOK
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"Category"}>
          <FontAwesomeIcon icon={faBook} className="mr-2" />
            CATEGORY
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"Books"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to={"contact"}>
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
            Commandes
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "By mot clé",
      target: "Page-1",
    },
    {
      title: "By Category",
      target: "Page-2",
    },
  ],
];

export default SideBar;
