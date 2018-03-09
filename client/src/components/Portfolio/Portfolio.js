import React, { Component } from 'react';
import "./portfolio.css";

class Portfolio extends Component {

    render = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div class="thumbnail">
                                    <img className="thumb" src="https://via.placeholder.com/350x350" alt="..." />
                                    <div className="caption">
                                        <h3>Thumbnail label</h3>
                                        <p>...</p>
                                        <p><a href="#" className="btn btn-primary" role="button">Visit Site</a> <a href="#" class="btn btn-default" role="button">GitHub</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div class="thumbnail">
                                    <img className="thumb" src="https://via.placeholder.com/350x350" alt="..." />
                                    <div className="caption">
                                        <h3>Thumbnail label</h3>
                                        <p>...</p>
                                        <p><a href="#" className="btn btn-primary" role="button">Visit Site</a> <a href="#" class="btn btn-default" role="button">GitHub</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div class="thumbnail">
                                    <img className="thumb" src="https://via.placeholder.com/350x350" alt="..." />
                                    <div className="caption">
                                        <h3>Thumbnail label</h3>
                                        <p>...</p>
                                        <p><a href="#" className="btn btn-primary" role="button">Visit Site</a> <a href="#" class="btn btn-default" role="button">GitHub</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div class="thumbnail">
                                    <img className="thumb" src="https://via.placeholder.com/350x350" alt="..." />
                                    <div className="caption">
                                        <h3>Thumbnail label</h3>
                                        <p>...</p>
                                        <p><a href="#" className="btn btn-primary" role="button">Visit Site</a> <a href="#" class="btn btn-default" role="button">GitHub</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Portfolio;