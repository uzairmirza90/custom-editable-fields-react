import React from "react";
import "../sidebar/sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEquals, faUser } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

const Sidebar = ({ users }: any) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <FontAwesomeIcon icon={faEquals} color="white" size="xl" />
        <h2 className="sidebar-heading">Event Organizer</h2>
      </div>

      <div className="divider"></div>

      <div className="pages">
        <div className="page">
          {/* <Link to="/" style={{ display: "flex", textDecoration: "none" }}> */}
          <FontAwesomeIcon icon={faUser} color="white" size="lg" />
          <h4 className="page-heading">
            All Users <span style={{ marginLeft: "60px" }}>{users.length}</span>
          </h4>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
