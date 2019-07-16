import React from "react";

function Header() {
  return (
    <header style={Headerstyle}>
      <div>
        <p>Contacts List</p>
      </div>
    </header>
  );
}

const Headerstyle = {
  background: "#264d73",
  color: "#f8f8f8",
  textAlign: "center",
  padding: "15px"
};

export default Header;
