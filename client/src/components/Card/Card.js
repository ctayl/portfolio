import React, { Component } from 'react';
import "./card.css";

class Card extends Component {

    render = () => {
        return (
            <div className="container">
                <div className="well">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-sm-1" />
                            <div className="col-md-8">
                                <h1 id="profile-header">Christopher Berger</h1>
                                <h4 id="profile-subheader">Full Stack Web Developer</h4>
                                <div id="profile-info">
                                <div>San Diego, CA</div>
                                <div>(858)344-5385</div>
                                <div>chrisb000@gmail.com</div><br/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <br/>
                                <a href="https://www.linkedin.com/in/chrisberger61/">linkedin.com/in/chrisberger61</a>
                                <br/>
                                <a href="https://github.com/lyonx">github.com/lyonx</a>
                                <a href="https://github.com/lyonx">github.com/lyonx</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Card;