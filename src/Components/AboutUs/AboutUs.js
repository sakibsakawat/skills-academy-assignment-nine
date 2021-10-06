import React from 'react';
import './AboutUs.css'
import about from '../../images/about.png'
const AboutUs = () => {
    return (
        <div className="aboutUsdiv1">
            
            <div className="d-flex justify-content-between ms-5 ">
                 <div className="aboutUsDiv2 w-50 m-5 text-start fontGoogle p-5 "><h4 className="fs-5">
                
                
 Welcome to SkillsAcademy<br/><br/>

Here at SkillsAcademy we offer the very best in Courses

We started SkillsAcademy with a single purpose, to provide the finest Courses to students

If you are like us then you like Coaching too

If so, we've got your back! <br/><br/>

At SkillsAcademy we are dedicated to:<br/><br/>

&#8226; Focusing on finding you the best  Courses<br/>

&#8226; providing quality service<br/>

&#8226; giving you a pleasant experience<br/><br/>

We love talking about Courses and chatting with students like you!

If you need anything don't hesitate to contact us at the link above!

Thank you for your interest in SkillsAcademy

<br/>All the team at<br/><br/> SkillsAcademy</h4>
</div>
            
                 <div className="aboutUsDiv3 w-50 m-5"><img src={about} className="d-block w-100 rounded aboutUsPhoto" alt=""/></div>
            
            
            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
        </div>
    );
};

export default AboutUs;