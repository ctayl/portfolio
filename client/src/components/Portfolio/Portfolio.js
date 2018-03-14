import React, { Component } from 'react';
import "./portfolio.css";
import List from "./portfolio.json";

class Portfolio extends Component {

    render = () => {
        let list = List.map(item => {
            return (
                <div className="col-sm-6">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div class="thumbnail">
                                <img className="thumb" src={item.data.img} alt="..." />
                                <div className="caption">
                                    <h3>{item.title}</h3>
                                    <p>{item.info}</p>
                                    <p><a href={item.data.url} className="btn btn-primary" role="button">Visit Site</a> <a href={item.data.repo} className="btn btn-default" role="button">GitHub</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {list}
                </div>
            </div>
        )
    }
};

export default Portfolio;