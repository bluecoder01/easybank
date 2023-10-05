import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav({}) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [count, setCount] = useState(1);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  }

  return (
    <header>
      <h1>Logo</h1>
      <div className="navlist">
        <ul>
          <Link to="/"> Home </Link>
          <Link to="/About" className="list_item">
            About
          </Link>
          <Link to="/Contact" className="list_item">
            Contact
          </Link>
        </ul>
      </div>
      {isUserLoggedIn ? (
        <button onClick={() => setIsUserLoggedIn(false)}>log out</button>
      ) : (
        <button onClick={() => setIsUserLoggedIn(true)}>log in</button>
      )}

      <button onClick={() => setCount(count + 1)}>Increase</button>
      <h1>{count}</h1>
      <button
        onClick={() => {
          if (count === 1) {
            return;
          }
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </header>
  );
}

export default Nav;
