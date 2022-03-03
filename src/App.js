import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PopularPlaceHome from "./Components/Body/PopularPlaceHome";
import Home from './Components/Home';
import NavbarNav from "./Components/Basics/Navbar";
import SignUp from "./Components/Firebase/signup/SignUp";
import { UserProvider } from "./Components/Firebase/config/UserContext";
import Account from "./Components/Firebase/Account/Account";
import Footer from "./Components/Basics/Footer";

function App() {
  return (
    <Router>
      <UserProvider>
        <NavbarNav />
        <Switch>
          <Route expact path='/signup' component={SignUp} />
          <Route expact path='/account' component={Account} />
          <Route expact path='/popularplaces' component={PopularPlaceHome} />
          <Route expact path='/' component={Home} />
        </Switch>
      <Footer/>
      </UserProvider>
    </Router>
  );
}

export default App;
