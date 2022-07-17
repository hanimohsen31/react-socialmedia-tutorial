import React, { useContext, useState, useEffect } from "react";
import { Home } from "./Pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import { Profile } from "./Pages/Profile/Profile";
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Login/Signup";
import { PalletContext } from "./store/PalletsContext";

function App() {
  const ctx = useContext(PalletContext);
  const [pallet, setPallet] = useState(ctx.defaultPallet);
  useEffect(() => {
    setPallet(ctx.defaultPallet);
  }, [ctx.defaultPallet]);
  document.querySelector("body").style.backgroundColor = pallet.bodyColor;
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
