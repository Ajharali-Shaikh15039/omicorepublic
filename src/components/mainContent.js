import React from 'react'

const MainContent = () => {
    return ( 
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="./images/1.jpeg" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                <img src="./images/2.jpeg" className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                <img src="./images/3.jpeg" className="d-block w-100" alt="..."></img>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            <h1></h1>
        </div>
        
    )
}
export default MainContent;
