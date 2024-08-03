import React from "react";
import './skills.css';
import { useState } from'react';

const Skills = () => {
    const [bar1, setBar1] = useState(90);
    const [bar2, setBar2] = useState(80);
    const [bar3, setBar3] = useState(75);
    const [bar4, setBar4] = useState(70);
    const [bar5, setBar5] = useState(60);
    const [bar6, setBar6] = useState(50);
    const [bar7, setBar7] = useState(65);
    const [bar8, setBar8] = useState(85);
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
                            <div className="progress-bar" role="progressbar" style={{ width: `${bar1}%` }}></div>
                            </div>
                        </div>
                        <div className="progress-item mb-3">
                            <span>CSS</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: `${bar2}%` }}></div>
                            </div>
                        </div>
                        <div className="progress-item mb-3">
                            <span>JavaScript</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: `${bar3}%` }}></div>
                            </div>
                        </div>
                        <div className="progress-item mb-3">
                            <span>React</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: `${bar4}%` }}></div>
                            </div>
                        </div>
                        <div className="progress-item mb-3">
                            <span>Photoshop</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: `${bar5}%` }}></div>
                            </div>
                        </div>
                        <div className="progress-item mb-3">
                            <span>Adobe XD</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: `${bar6}%` }}></div>
                            </div>
                        </div>
                        <div className="progress-item mb-3">
                            <span>Node.js</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: `${bar7}%` }}></div>
                            </div>
                        </div>
                        <div className="progress-item mb-3">
                            <span>WordPress</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: `${bar8}%` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;