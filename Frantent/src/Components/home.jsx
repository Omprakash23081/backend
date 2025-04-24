import React from "react";
import { NavLink } from "react-router-dom";

function home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <p>This is a simple React component.</p>
      <p>You can add more content here.</p>
      <h1>Welcome to the Home Page!</h1>
      <button>
        <NavLink to="/about">
          <b>go on about page </b>
        </NavLink>
      </button>
    </div>
  );
}

export default home;
