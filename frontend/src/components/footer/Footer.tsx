import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
Customized as Per Your Needs          <span>
            <Link 
              style={{ color: "white" }}
              className="nav-link"
              to={"Github REpo Link"}
            >🕹️
            </Link>
          </span>
          <br></br>
        Developed by Yogesh Tanwar , Monit Singh and Heshica Vanapalli👨‍💼
        </p>
      </div>
    </footer>
  );
};

export default Footer;