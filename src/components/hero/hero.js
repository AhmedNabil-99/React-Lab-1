import React from "react";
import './hero.css';

const Hero = () => {
    return (
        <footer className="footer-container text-center text-white p-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-left">
                        <h5 className="mb-4">GET IN TOUCH</h5>
                        <p><i className="fas fa-envelope"></i> kr12@hotmail.com</p>
                        <p><i className="fas fa-phone"></i> 717-555-1234</p>
                    </div>
                    <div className="col-md-4 my-auto cont">
                        <button className="btn btn-outline-light">CONTACT ME</button>
                    </div>
                    <div className="col-md-4 text-right">
                        <div className="social-icons">
                            <button className="btn btn-link text-white mr-3"><i className="fab fa-linkedin"></i></button>
                            <button className="btn btn-link text-white mr-3"><i className="fab fa-facebook"></i></button>
                            <button className="btn btn-link text-white"><i className="fab fa-twitter"></i></button>
                        </div>
                        <p className="mt-4">Copyright © 2019 KR</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Hero;
