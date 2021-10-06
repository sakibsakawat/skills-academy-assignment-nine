import React from 'react';
import './HomeCard.css'


const HomeCard = (props) => {
    const { name, tutor, price,duration,img,} = props.card



   return (
        <div className="div1">

          <div className="row container row-cols-1 row-cols-md g-4 border-top border border-success mb-5 pb-4">
  <div className="col">
    <div className="card div2">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><span className="greenTag">Instructor</span>: {tutor}</p>
        <p className="card-text"><span className="greenTag">Price</span>: {price}</p>
        <p className="card-text"><span className="greenTag">Duration</span>: {duration}</p>
        <a href="#" className="btn btn-outline-success">Details</a>
      </div>
    </div>
  </div>
  </div>





          
        </div>
    );
};

export default HomeCard;