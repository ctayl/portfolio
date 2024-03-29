import React, { Component } from 'react';

class Resume extends Component {

    render = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <h1>Christopher Berger</h1>
                        <h3>Full Stack Developer</h3>
                    </div>
                    <div className="col-sm-4">
                        <br/>
                        <h5>San Diego, California</h5>
                        <h5>(858)344-5385</h5>
                        <h5>chrisb000@gmail.com</h5>
                    </div>
                    <div className="col-sm-12">
                        <hr/>
                    </div>
                    <div className="col-sm-8">
                        <h4>Objective</h4>
                        <p>Learning, experimentation, and problem solving are core to my being. I have always enjoyed building and inventing, and I am ecstatic to have found a career path to match my personality. I am looking for a position as a front-end, back-end or full-stack developer; however, I am interested in a variety of roles, and am always open to learn new technologies.</p>
                        <hr/>
                        <h4>Applications Built</h4>
                        <br/>
                        <h4>BumbleBot</h4>
                        <p>A full stack MERN app, BumbleBot uses the Twitter API to generate “twitter bots”. The app uses Passport.js to authenticate users and store Twitter client data. On the front end, users are provided an interface for automating their account.</p>
                        <ul>
                            <li>Four developer team</li>
                            <li><a href="https://github.com/shama009/BumbleBot">GitHub</a></li>
                            <li><a href="http://bumble-bot.herokuapp.com/">Application</a></li>
                        </ul>
                        <br/>
                        <h4>Concentration</h4>
                        <p>A single player card game using API calls to emulate card logic. Completed as a five day challenge.</p>
                        <ul>
                            <li>Sole developer</li>
                            <li><a href="https://github.com/lyonx/Concentration">GitHub</a></li>
                            <li><a href="https://concentration10.herokuapp.com/">Application</a></li>
                        </ul>
                        <h4>Lazy-Food</h4>
                        <p>Application which allows users to compile their available ingredients, and find recipes based on which ingredients they have. Uses API calls to retrieve recipes, and a SQL database to store user data, ingredients, and recipes.</p>
                        <ul>
                            <li>Four developer team</li>
                            <li><a href="https://github.com/ClarkPhan/food-recipe-app">GitHub</a></li>
                            <li><a href="https://lazy-food.herokuapp.com/">Application</a></li>
                        </ul>
                        <h4>MyPlace</h4>
                        <p>A personal homepage. Provides users with location-based news, events, weather and traffic.</p>
                        <ul>
                            <li>Four developer team</li>
                            <li><a href="https://github.com/randolfResurreccion/MyPlace">GitHub</a></li>
                            <li><a href="https://randolfresurreccion.github.io/MyPlace/">Application</a></li>
                        </ul>
                        <hr/>
                        <h4>Education</h4>
                        <h5>UCSD Coding Bootcamp, UCSD Extension - Full Stack Developer</h5>
                        <h6>November 2017 - February 2018</h6>
                        <p>A twelve week intensive training program, focusing on job skills and covering the MERN stack and other relevant technologies.</p>
                        <br/>
                        <h5>Mira Costa College, Encinitas, California</h5>
                        <h6>September 2016 - Current</h6>
                        <p>Working towards transferring to a University within the year, for a  Bachelor in  Computer Science.</p>
                        <br/>
                        <h5>North Coast High School, Encinitas, California</h5>
                        <h6>June 2012</h6>
                        <hr/>
                        <h4>Experience</h4>
                        <h5>Freelance, San Diego —  Web Developer</h5>
                        <h6>September 2017 - PRESENT</h6>
                        <p>I work with small groups to produce MERN apps.</p>
                        <br/>
                        <h5>Independent Legal Contractor, San Diego — Process Server</h5>
                        <h6>August 2014 - PRESENT</h6>
                        <p>Process serving for family law attorneys involves verbal contracts, networking, record keeping, and investigation. I ensure that one’s legal right to receive documents in person is met.</p>
                        <br/>
                        <h5>Vons, San Diego — Cashier</h5>
                        <h6>September 2012 - Current</h6>
                        <p>As my first job, Vons offered me a reliable job within biking distance of home. This job taught me about customer service, communication, and ethics in a real world environment. Having recently found a direction, I am eager to stretch my legs and begin my career.</p>
                        
                       
                    </div>
                    <div className="col-sm-4">
                        <h4>Skills</h4>
                        <h5>Programming Languages:</h5>
                        <ul>   
                            <li>HTML/CSS</li>
                            <li>JavaScript/ES6</li>
                            <li>Java</li>
                            <li>SQL</li>
                        </ul>
                        <h5>Libraries and Frameworks:</h5>
                        <ul>   
                            <li>React.js</li>
                            <li>Node.js/Express.js</li>
                            <li>JQuery</li>
                        </ul>
                        <h5>Version Control:</h5>
                        <ul>   
                            <li>Git</li>
                        </ul>
                        <h5>Other:</h5>
                        <ul>   
                            <li>API/Async</li>
                            <li>REST</li>
                            <li>MVC</li>
                        </ul>
                        <br/>
                        <h4>Awards</h4>
                        <h5>Eagle Scout - Troop 713 Del Mar, June 2012</h5>
                        <br/>
                        <h4>Languages</h4>
                        <h5>Spanish - Intermediate</h5>
                    </div>
                </div>
            </div>
        )
    }
};

export default Resume;