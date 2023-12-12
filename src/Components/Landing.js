import React from 'react'
import { Image } from "react-bootstrap";
import svgI from "../assets/images/hero-img.png";
import '../assets/styles/landing.css';

function Landing() {
    return (

        <section id="hero" classNameName="hero d-flex align-items-center">

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up" className='txt1'>Ofrecemos soluciones modernas para hacer crecer su negocio</h1>
                        <h2 data-aos="fade-up" data-aos-delay="400">Ingesoftware</h2>
                        <div data-aos="fade-up" data-aos-delay="600">
                            <div className="text-center text-lg-start">
                                <a  href="/" className="btn btn-primary scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                    <span >Get Started</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                        <Image className="img-fluid" src={svgI}/>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Landing