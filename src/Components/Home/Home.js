import React from 'react';
import './Home.css'
import Slider from '../Slider/Slider';
import HomeCards from '../HomeCards/HomeCards';
import AboutUs from '../AboutUs/AboutUs';


const Home = () => {
       
 return (
        <div className="homeDiv2">
            

            <div><Slider></Slider></div>
            <div><HomeCards></HomeCards></div>
            <div><AboutUs></AboutUs></div>

           
        </div>
    );
};

export default Home;