import OriginalFooter from "@theme-original/Footer";
import React from "react";

function Footer(props) {
  return (
    <div className="footer-wrapper footer--dark">
      <div className="container margin-vert--lg">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ flexGrow: 1, maxWidth: 650 }}>
            <h3>Tech Fiddle</h3>
            Some text...
          </div>
          <img
            src="https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/icon-removebg.jpg"
            style={{
              borderRadius: "50%",
              height: 120,
              marginLeft: 10,
              width: 120,
            }}
          />
        </div>
      </div>
      <OriginalFooter {...props} />
    </div>
  );
}

export default Footer;