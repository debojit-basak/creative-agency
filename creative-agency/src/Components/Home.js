import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import frame from '../images/Frame.png';
import slack from '../images/logos/slack.png';
import google from '../images/logos/google.png';
import uber from '../images/logos/uber.png';
import netflix from '../images/logos/netflix.png';
import airbnb from '../images/logos/airbnb.png';
import Services from './Services';
import Slider from './Slider';
import Review from './Review';


const Home = () => {

    const handleCard = (z) => {
        // console.log(z);
    }
    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/AllCardItem')
            .then(res => res.json())
            .then(data => {
                setServiceData(data);
                //  console.log(data);
            })
    }, [])

    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/getReview')
            .then(res => res.json())
            .then(data => {
                setReviewData(data);
                //  console.log(data);
            })
    }, [])


    return (
        <div>
            <Nav></Nav>
            <section className="container-fluid main-banner">
                <div className="container">
                    <div style={{ paddingTop: '10%' }} className="row d-flex align-items-center">
                        <div className="col-md-5 ">
                            <h1 className="font-weight-bold text-capitalize">Let's Grow your <br /> brand to the <br /> next level</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laudantium harum repudiandae, consequuntur atque doloremque.</p>
                            <button className="btn btn-dark">Hire Us</button>
                        </div>
                        <div className="col-md-7">
                            <img className="w-100" src={frame} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container d-flex flex-wrap justify-content-around pt-5 pb-5">
                <img style={{ width: '140px', height: '50px' }} src={slack} alt="" />
                <img style={{ width: '140px', height: '50px' }} src={google} alt="" />
                <img style={{ width: '140px', height: '50px' }} src={uber} alt="" />
                <img style={{ width: '140px', height: '50px' }} src={netflix} alt="" />
                <img style={{ width: '140px', height: '50px' }} src={airbnb} alt="" />
            </section>

            <section className="container pt-5 pb-3 text-center">
                <h2>Provide awesome <span>services</span></h2>
                <div className="d-flex flex-wrap justify-content-around  ">
                    {
                        serviceData.map(x => <Services handleCard={handleCard} id={x.service} img={x.file.name} name={x.service} des={x.description}></Services>)
                    }
                </div>
            </section>

            <section style={{ background: '#111430', minHeight: '70vh' }} className="container-fluid text-center text-white mt-3 pt-5">
                <h2>Here are some of <span>our works</span></h2>
                <Slider></Slider>
            </section>

            <section className="container pb-5 pt-5">
                <h2 className="text-center pb-5">Client's <span>Feedback</span></h2>
                <div className="row">
                    {
                        reviewData.map(x => <Review name={x.name} designition={x.designition} description={x.description} ></Review>)
                    }
                </div>
            </section>

            <section id="footer" className="container-fluid p-5">
                <div className="row">
                    <div className=" col-md-6">
                        <h2>Let us handle your <br /> project , professionally</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus aspernatur officiis corporis ad labore, odit veniam quo! Deleniti nobis molestias fugit maxime rem iusto voluptate. Quo totam accusantium reprehenderit.</p>
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your name/Company name" />
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message here..."></textarea>
                            </div>
                            <input type="submit" value="Send" className="btn btn-dark" />
                        </form>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;