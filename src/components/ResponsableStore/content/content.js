import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { useState } from "react";
import Topbar from "../sidebar/topMenu";
import SideBar from "../sidebar/sideBar";
import { Outlet } from "react-router-dom";

const Content = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    return (
    <div className="App wrapper">
        <SideBar  toggle={toggleSidebar} isOpen={sidebarIsOpen}></SideBar>
        <Container
        fluid
        className={classNames("content", { "is-open": sidebarIsOpen })}>
        <Topbar toggleSidebar={toggleSidebar} />
        <Outlet/>
      </Container>
    </div>
    );
}
export default Content;
