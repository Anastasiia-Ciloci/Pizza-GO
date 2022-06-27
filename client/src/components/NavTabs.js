import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul id="navbar" className="nav nav-tabs">
      <li className="nav-item">
        <a
          id="tab"
          href="#menu"
          onClick={() => handlePageChange("Menu")}
          className={currentPage === "Menu" ? "nav-link active" : "nav-link"}
        >
          Menu
        </a>
      </li>
      <li className="nav-item">
        <a
          id="tab"
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          id="tab"
          href="#cart"
          onClick={() => handlePageChange("Cart")}
          className={currentPage === "Cart" ? "nav-link active" : "nav-link"}
        >
          Cart
        </a>
      </li>
      <li className="nav-item">
        <a
          id="tab"
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
