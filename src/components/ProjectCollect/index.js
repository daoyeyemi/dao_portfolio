import "./style.css";

import React from "react";
import logo1 from "../Main/github.png";
import logo2 from "../Main/linkedin.png";
import nbadataproject from "../ProjectCollect/nbadataproject.png";
import oyedaEcom from "../ProjectCollect/oyedaEcom.png";
import screenshot1 from "../ProjectCollect/trek.png";
import screenshot7 from "../ProjectCollect/crypto-data-science.png";

function ProjectCollect() {
    return (
        <div>
            <h1>My Projects</h1>
            <div className="container">            
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <a href={"https://rbraun04.github.io/Trek/"} target={"_blank"}>
                            <img src={screenshot1} className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Excursion App</h5>
                            <p className="card-text">The Excursion app is designed to be a single stop app for a trip. 
                            Plan out an excursion today.</p>
                            <p className="card-text"><small className="text-muted">August 11, 2024 </small></p>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>    
            <br></br> <br></br>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <br></br>
                <br></br>
                
            </div>
            <br></br><br></br>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <a href={"https://oyeda-ecom-9c840fa41f1f.herokuapp.com/"} target={"_blank"}>
                            <img src={oyedaEcom} className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">oyedaEcom</h5>
                            <p className="card-text">an e-commerce app made possible using Python and Django framework</p>
                            <p className="card-text"><small className="text-muted">December 7, 2021</small></p>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="col">
                    <div className="card">
                        <a href={"https://share.streamlit.io/daoyeyemi/nbadata/data.py"} target={"_blank"}>
                            <img src={nbadataproject} className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">NBA Data Science Application</h5>
                            <p className="card-text">a web application that displays NBA players stats from every season from 1951 to 2020</p>
                            <p className="card-text"><small className="text-muted">December 20, 2021</small></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <a href={"https://share.streamlit.io/daoyeyemi/cryptodatascience/index.py"} target={"_blank"}>
                            <img src={screenshot7} className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Cryptocurrency Data Science</h5>
                            <p className="card-text">
                                a cryptocurrency data science app made possible using Streamlit and Python; 
                                displays top cryptocurrencies and percent changes using charts and tables
                            </p>
                            <p className="card-text"><small className="text-muted">January 10, 2022</small></p>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>

        </div>                
            <div id="footer">
                <a href={"https://github.com/daoyeyemi"} target={"_blank"}><img id="img1" src={logo1} alt="..."></img></a>
                <a href={"https://linkedin.com/in/david-oyeyemi-035689103"} target={"_blank"}><img id="img2" src={logo2} alt="..."></img></a>   
            </div>
        </div>
    )
}

export default ProjectCollect;