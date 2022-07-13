import { Home } from "./Pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import { Profile } from "./Pages/Profile/Profile";
import { Login } from './Pages/Login/Login';
import { Signup } from './Pages/Login/Signup';
function App() {
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
