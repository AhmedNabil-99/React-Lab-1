import React from "react";
import './education.css';

const Portfolio = () => {
    return (
        <div className="portfolio-container text-center p-5">
            <h2 className="mb-4">Portfolio</h2>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">WEB DESIGN</h5>
                            <hr className="my-4"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">MOBILE DESIGN</h5>
                            <hr className="my-4"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">LOGO DESIGN</h5>
                            <hr className="my-4"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">WEB APPLICATION DEVELOPMENT</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">MOBILE APPLICATION DEVELOPMENT</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">PWA DEVELOPMENT</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
