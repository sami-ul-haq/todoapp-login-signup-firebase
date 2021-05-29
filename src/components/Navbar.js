import React from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

const Navbar = ({ user }) => {
  const history = useHistory();
  const LogoutHandler = () => {
    auth.signOut();
    history.push("/");
  };
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <ul>
          {user ? (
            <li>
              <button onClick={LogoutHandler}>Logout</button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
