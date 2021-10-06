import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Courses from './Components/Courses/Courses'
import Videos from './Components/Videos/Videos';
import ContactUs from './Components/ContactUs/ContactUs';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeCards from './Components/HomeCards/HomeCards';
import AboutUs from './Components/AboutUs/AboutUs';
import NotFound from './Components/NotFound/NotFound'









function App() {
  return (
    <div className="App">
     <Router>
         <Header></Header>
         
        <Switch>
            <Route exact path="/">
                   <Home></Home>
            </Route>
            <Route path="/courses">
                   <Courses></Courses>
            </Route>
            <Route path="/home">
                   <Home></Home>
            </Route>
            
            <Route path="/videos">
                   <Videos></Videos>
            </Route>
            <Route path="/social">
                   <ContactUs></ContactUs>
            </Route>
            <Route path="/homecards">
                   <HomeCards></HomeCards>
            </Route>
            <Route path="/aboutus">
                   <AboutUs></AboutUs>
            </Route>
            <Route path="/contactus">
                   <ContactUs></ContactUs>
            </Route>
            <Route path="*">
                   <NotFound></NotFound>
            </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
