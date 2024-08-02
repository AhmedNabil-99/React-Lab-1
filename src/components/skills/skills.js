import React from "react";
import './skills.css';

const Skills = () => {
    return (
        <div className="skills-container text-center p-5">
            <h2 className="mb-4">Skills</h2>
            <p className="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy euismod tempor incididunt ut labore et dolore magna aliquam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="row">
                <div className="col-md-4 mt-5 text-left">
                    <h5 className="mb-1 p-2">MY FOCUS</h5>
                    <hr className="my-0 mb-4"/>
                    <ul className="list-unstyled">
                        <li className="p-2">UI/UX Design</li>
                        <li className="p-2">Responsive Design</li>
                        <li className="p-2">Web Design</li>
                        <li className="p-2">Mobile App Design</li>
                    </ul>
                </div>
                <div className="col-md-8">
                    <div className="progress-container">
                        <div className="progress-item mb-3">
                            <span>HTML</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className="progress-item mb-3">
                            <span>CSS</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <div className="progress-item mb-3">
                            <span>JavaScript</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div className="progress-item mb-3">
                            <span>React</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                        <div className="progress-item mb-3">
                            <span>Photoshop</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '60%' }}></div>
                            </div>
                        </div>
                        <div className="progress-item mb-3">
                            <span>Adobe XD</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                        <div className="progress-item mb-3">
                            <span>Node.js</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                        <div className="progress-item mb-3">
                            <span>WordPress</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
