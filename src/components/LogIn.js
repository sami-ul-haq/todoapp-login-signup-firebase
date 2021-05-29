import React, { useState } from "react";
import { useHistory } from "react-router";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const logInUser = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      toast.success('🦄 You"re Logged In!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      history.push("/");
    } catch (error) {
      toast.error(`${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const LoginHandler = (e) => {
    e.preventDefault();
    logInUser();
  };
  return (
    <div className="center-item">
      <h1>Login Here</h1>
      <form onSubmit={LoginHandler}>
        <input
          placeholder="Enter Your Email .."
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Enter Your Password .."
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <ToastContainer />
      <br />
      <p>
        Don't Have Account Plz
        <br />
        <Link to="/signup">
          <button> Sign Up</button>
        </Link>
      </p>
    </div>
  );
};

export default LogIn;
