import React from 'react'



export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-caption">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/400×400?burger" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/400×400?pastry" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/400×400?pizza" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
