import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const signUpUser = async () => {
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      toast.success('🦄 You"re Registered Now!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(result.user);
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

  const SignupHandler = (e) => {
    e.preventDefault();
    signUpUser();
  };
  return (
    <div className="center-item">
      <h1>Sign Up Here</h1>
      <form onSubmit={SignupHandler}>
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
        <button type="submit">Sign Up</button>
      </form>
      <ToastContainer />
      <br />
      <p>
        Already Have Account Plz Login In
        <br />
        <Link to="/login">
          <button type="submit">Log In</button>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
