/* eslint-disable react/jsx-no-comment-textnodes */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PopularPlaceHome from "./Components/Body/Places/PopularPlaceHome";
import PlaceHome from "./Components/Body/Places/PlaceHome";
import PopularTourHome from "./Components/Body/Tours/PopularTours";
import TourHome from "./Components/Body/Tours/TourHome"
import Home from './Components/Home';
import NavbarNav from "./Components/Basics/Navbar";
import SignUp from "./Components/Firebase/signup/SignUp";
import { UserProvider } from "./Components/Firebase/config/UserContext";
import Account from "./Components/Firebase/Account/Account";
import Footer from "./Components/Basics/Footer";
import stockData from './data/Tours'
import stockData2 from './Components/Body/Places/Data'
import Hotel from './Components/Body/History/HotelHome'
import History from './Components/Body/History/HistoryHome'
import Admin from './Admin/index'
import Reviews from './Admin/Reviews/review'
import Places from './Admin/Places/places'
import Tours from './Admin/Tours/index'
import AddPic from './Admin/Tours/AddPictures'

function App() {
  return (
    <Router>
      <UserProvider>
        <NavbarNav />
        <Switch>
          <Route expact path='/signup' component={SignUp} />
          <Route expact path='/account' component={Account} />
          <Route expact path='/history' component={History} />
          <Route expact path='/hotel' component={Hotel} />
          <Route expact path='/popularplaces/:id' component={PlaceHome} data={stockData2} />
          <Route expact path='/popularplaces' component={PopularPlaceHome} />
          <Route expact path='/populartours/:id' component={TourHome} data={stockData} />
          <Route expact path='/populartours' component={PopularTourHome} />
          {/* //! ADMIN */}
          <Route expact path='/admin' component={Admin} />
          <Route expact path='/reviews' component={Reviews} />
          <Route expact path='/tours' component={Tours} />
          <Route expact path='/AddPic' component={AddPic} />
          <Route expact path='/places' component={Places} />
          <Route expact path='/' component={Home} />
        </Switch>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
