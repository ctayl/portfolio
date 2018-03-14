import React, { Component } from 'react';
import "./home.css";

class Home extends Component {

    render = () => {
        return (
            <div className="container" id="landing">
                <div className="row" id="head">
                    <div className="col-md-12">
                        <div className="page-header">
                            <h1>Christopher Berger <small>Full Stack Web Developer</small></h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12"  id="intro">
                        <h2>Welcome to my portfolio!</h2>
                        <br/>
                        <h4>Site Overview:</h4>
                            <ul>
                                <li><a href="/portfolio">Portfolio</a>: A gallery of my work, with links and images.</li>
                                <li><a href="/card">Virtual Buisness Card</a>: Lightweight page with contact info.</li>
                                <li><a href="/resume">Resume</a>: Digital resume with links.</li>
                            </ul>
                        <br/>
                        <h4>Thanks for visiting!</h4>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
};

export default Home;