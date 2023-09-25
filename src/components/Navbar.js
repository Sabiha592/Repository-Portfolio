import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-white">
      <div className="container my-2 ">
        <Link to="/" className="navbar-brand text-dark font-weight-bold">
          Sabiha Marur
        </Link>
        <Link to="/Contact" className="ms-auto mx-3">
          <button className="btn btn-outline-info ms-auto">Contact me</button>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div className="navbar-nav">
            <a href="/" className="nav-item nav-link text-dark h6 mx-1 my-auto">
              Projects
            </a>

            <a href="/" className="nav-item nav-link text-dark h6 mx-1 my-auto">
              Blogs
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
