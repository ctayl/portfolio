import React, { Component } from 'react';

class Nav extends Component {

    render = () => {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Chris Berger</a>
                    </div>

                    
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="/">Home<span className="sr-only">(current)</span></a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/card">Virtual Buisness Card</a></li>
                            <li><a href="/resume">Resume</a></li>
                        </ul>
                        <form className="navbar-form navbar-left">
                            <div className="form-group">
                                <input type="text" class="form-control" placeholder="Search" />
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Link</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Connect <span className="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="https://www.linkedin.com/in/chrisberger61/">LinkedIn</a></li>
                                    <li><a href="https://github.com/lyonx">GitHub</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="/card">Contact Info</a></li>
                                    <li><a href="#">Resume</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
};

export default Nav;