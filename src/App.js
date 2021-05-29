import { useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LogIn from "./components/LogIn";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import ToDo from "./components/ToDo";
import { auth } from "./firebase";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, [user]);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar user={user} />
        <Switch>
          <Route exact path="/">
            {/* This Condition Needs To Be Change */}
            {/* {user ? <ToDo user={user} /> : <Redirect to="/signup" />} */}
            {user && <ToDo user={user} />}
          </Route>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
