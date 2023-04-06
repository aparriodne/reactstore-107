import "./about.css"
import {useState} from 'react';

function About(){
const [displayEmail, setDisplayEmail] = useState(false);

    function toggleEmail(){
        console.log("im here");
        setDisplayEmail(true);
    }

    function getEmailSection(){
        if(displayEmail){
            return<h3>michaelproudfoot@yail.com</h3>
        }
    }
    
    return(
        <div className='about'>
            <h1>What makes us, us!</h1>
            <div className="mail">{getEmailSection()}</div>
            <button className="emailbtn" onClick={toggleEmail}> Show Email  </button>

        </div>
    );
}

export default About;
