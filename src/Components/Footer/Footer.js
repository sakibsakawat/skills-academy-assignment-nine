import React from 'react';
import './Footer.css';
import {Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className="footerDiv1">
            
            <div className="d-flex justify-content-between ms-5">
             <div  className="footerDiv2"><h1><Link className="navbar-brand" to="/#top"><span className="text-warning fw-bold">Skills</span><span className="text-light fw-normal">Academy</span></Link></h1></div>
             <div  className="d-flex align-items-center me-5 footerDiv3"><p className="text-warning">Made With <span className="text-danger">&hearts;</span> By <span className="text-light">Sakawat Hossain </span></p></div>
        
            
            </div>
        </div>
    );
};

export default Footer;