import React from "react";
import './bio.css';

const Bio = () => {
    return (
        <>    
            <div className='bio'>
                <p className="name display-1 top-left m-5">Killua Zoldyk</p>
                <p className="job top-left">Assassin</p>
                <button className="contact-btn btn btn-primary">Contact Me</button> 
            </div>
        </>
    )
}

export default Bio;
