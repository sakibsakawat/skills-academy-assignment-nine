import React from 'react';
import './Course.css'
const Course = (props) => {
     const {name, key, img, tutor,price,duration} = props.product;
    return (
        <div className="row row-cols-1 row-cols-md g-4 cards">
            {

 <div className="col">
    <div className="card h-100">
      <img src={img} class="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Instructor: {tutor}</p>
        <div className="div3">
        <p className="card-text ms-2 coursePrice">৳{price}</p>
        <p class="card-text durationLeft"><i class="fas fa-clock"></i> {duration}</p>
        </div>
      </div>
    </div>
  </div>


               
            }
        </div>
    );
};

export default Course;