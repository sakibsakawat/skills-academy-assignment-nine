import React from 'react';
import { useEffect, useState } from "react";
import Course from '../Course/Course';
import './Courses.css'





const Courses = () => {
   const [ products, setProducts ] = useState([]);
   useEffect(() => {
       fetch('./fakeData.JSON')
       .then(res => res.json())
       .then(data => setProducts(data));
   },[])
   


   return (
       <div className="container mb-5">
       <h1 className="coursesH1"><span className="saTag1">10 MINUTE SCHOOL</span> Affiliated Courses</h1>
      
       <div className="coursesDiv1" >
        {
          products.map(product => <Course product={product}></Course>)
        }
       
       </div>
      
       
       
       
       
       </div>
       
   )
}

export default Courses;