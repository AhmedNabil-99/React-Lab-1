import React from "react";
import './contacts.css';

const Contacts = () => {
    return (
        <>    
            <div className='contacts'>
                <div className="d-flex align-items-start">
                    <p className="about display-5 text-left">About me</p>
                    <p className="description ml-5">
                            I'm Killua Zoldyck, a character from the world of "Hunter x Hunter."
                            Born into the notorious Zoldyck family of assassins,
                            I've been trained from a young age to be an expert killer.
                            Despite my background, there's more to me than my skills in 
                            combat and assassination. I have silver hair, sharp blue eyes,
                            and a demeanor that often swings between mischievous and serious.
                        </p>
                </div>
                <a href="/resume.pdf" className="btn btn-primary mt-3" download>Download Resume</a>
            </div>
        </>
    )
}

export default Contacts;