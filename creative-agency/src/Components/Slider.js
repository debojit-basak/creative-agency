import React from 'react';
import slider1 from '../images/carousel-1.png';
import slider2 from '../images/carousel-2.png';
import slider3 from '../images/carousel-4.png';

const Slider = () => {
    return (
        <div  className="slide">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li  data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container pt-5 pb-5 ">
                            <div className="row pb-3">
                                <div className="col-sm-4"><img src={slider1} alt=""/></div>
                                <div className="col-sm-4"><img src={slider2} alt=""/></div>
                                <div className="col-sm-4"><img src={slider3} alt=""/></div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="container pt-5 pb-5 ">
                            <div className="row pb-3">
                                <div className="col-sm-4"><img src={slider2} alt=""/></div>
                                <div className="col-sm-4"><img src={slider3} alt=""/></div>
                                <div className="col-sm-4"><img src={slider1} alt=""/></div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <div className="container pt-5 pb-5 ">
                            <div className="row pb-3">
                                <div className="col-sm-4"><img src={slider3} alt=""/></div>
                                <div className="col-sm-4"><img src={slider1} alt=""/></div>
                                <div className="col-sm-4"><img src={slider2} alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;