import React from 'react';
import { useEffect, useState } from "react";
import HomeCard from '../HomeCard/HomeCard';
import './HomeCards.css'
import {Link } from 'react-router-dom'




const HomeCards = () => {
      const [ cards, setCards ] = useState([]);
   useEffect(() => {
       fetch('./fakeinfo.JSON')
       .then(res => res.json())
       .then(data => setCards(data));
   },[])



    return (
        <div className="homeCardDiv2">
         <h1 className="my-5"> <span className="text-success">Our</span> <span > Courses</span></h1>


        <div className="homeCardsDiv1" >
       
          {
         
           cards.map(card => <HomeCard
              key={card.key}
              card={card}
           
           
           ></HomeCard>)
       
           

           }  
           
           
           </div>
        <Link to="/courses" className="btn btn-outline-success mb-5">More Courses</Link>
        
        
        
        
        </div>
    );
};

export default HomeCards;