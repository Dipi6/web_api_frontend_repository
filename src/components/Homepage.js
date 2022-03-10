import home2 from './image/home2.jpg';
import landing1 from './image/landing1.jpg';
import welcome from './image/welcome.jpg';
import welcome2 from './image/welcome2.jpg';
import welcome3 from './image/welcome3.jpg';
import appointment from './image/appointment.png';
import bulb from './image/bulb.png';
import businessman from './image/businessman.png';
import cleaning from './image/cleaning.jpg';
import garderner from './image/garderner.jpg';
import laundry from './image/laundry.jpg';
import chef from './image/chef.jpg';
import handyman from './image/handyman.jpg';
import { Carousel } from 'react-bootstrap'
import React, { useReducer } from 'react'
import { Container, Col, Row, Form } from "react-bootstrap";
import '../App.css';



// import React, {Component} from "react"
import { Button } from 'react-bootstrap'
import Card from "react-bootstrap/Card";


const Homepage = () => {

  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={landing1}
            alt="First slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>Welcome to EasyWork</h3>
            <p>We provide best of our services.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={home2}
            alt="Second slide"
            style={{ height: "500px", objectFit: "cover" }}

          />
          <Carousel.Caption>
            <h3>Get Your Work Done with Us</h3>
            <p>Happy working with us</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



      <Container className='about'>
        <Row className='welcome container' >
          <Col>
            <img src={welcome3}></img>
          </Col>

          <Col>

            <h4>Welcome to Home Service</h4>
            <p>Get rid of all of your home problmes with easywork. We provide best of our services and give you solution in few days.</p>
 
          </Col>
        </Row>

      </Container>


      <Container fluid className='solution'>
        <h3 class='text-center'>Fastest Solution</h3>

        <Row className='solution mx-auto'>
          <Col className="">
            <img src={businessman} className='d-block mx-auto' ></img>

            <p className='text-center'>Login/Signup</p>

          </Col>
          <Col className="">
            <img src={appointment} className='d-block mx-auto' ></img>

            <p className='text-center'>Book Appointment</p>
          </Col>
          <Col className="">
            <img src={bulb} className='d-block mx-auto' ></img>

            <p className='text-center'>Get your Solution</p>
          </Col>

        </Row>
      </Container>

      <hr className='container' />

      <h2 className='text-center mt-5'>Our Services</h2>
      <Container fluid className='solution'>

        <Row className='solution mx-auto'>

          <Col className="col-md-3 my-3">
            <a href={`/book-service/computer`} className="text-secondary service-link" style={{transition:"0.3s",textDecoration: "none"}}>
              <div className='rounded mx-auto pt-3' style={{ width: "50%", transition: "0.3s" }}>
                <i class="fas fa-laptop d-block text-center text-secondary" style={{ fontSize: "2.5em" }}></i>
                <p className='text-center'>Computer</p>
              </div>
            </a>
          </Col>

          <Col className="col-md-3 my-3">
            <a href={`/book-service/appliance`} className="text-secondary service-link" style={{transition:"0.3s",textDecoration: "none"}}>
              <div className='rounded mx-auto pt-3' style={{ width: "50%", transition: "0.3s" }}>
                <i class="fas fa-blender-phone d-block text-center text-secondary" style={{ fontSize: "2.5em" }}></i>
                <p className='text-center'>Appliance</p>
              </div>
            </a>
          </Col>

          <Col className="col-md-3 my-3">
            <a href={`/book-service/carpentry`} className="text-secondary service-link" style={{transition:"0.3s",textDecoration: "none"}}>
              <div className='rounded mx-auto pt-3' style={{ width: "50%", transition: "0.3s" }}>
                <i class="fas fa-chair d-block text-center text-secondary" style={{ fontSize: "2.5em" }}></i>
                <p className='text-center'>Carpentry</p>
              </div>
            </a>
          </Col>

          <Col className="col-md-3 my-3">
            <a href={`/book-service/electricity`} className="text-secondary service-link" style={{transition:"0.3s",textDecoration: "none"}}>
              <div className='rounded mx-auto pt-3' style={{ width: "50%", transition: "0.3s" }}>
                <i class="fas fa-plug d-block text-center text-secondary" style={{ fontSize: "2.5em" }}></i>
                <p className='text-center'>Electricity</p>
              </div>
            </a>
          </Col>

          <Col className="col-md-3 my-3">
            <a href={`/book-service/plumbing`} className="text-secondary service-link" style={{transition:"0.3s",textDecoration: "none"}}>
              <div className='rounded mx-auto pt-3' style={{ width: "50%", transition: "0.3s" }}>
                <i class="fas fa-faucet d-block text-center text-secondary" style={{ fontSize: "2.5em" }}></i>
                <p className='text-center'>Plumbing</p>
              </div>
            </a>
          </Col>

          <Col className="col-md-3 my-3">
            <a href={`/book-service/painting`} className="text-secondary service-link" style={{transition:"0.3s",textDecoration: "none"}}>
              <div className='rounded mx-auto pt-3' style={{ width: "50%", transition: "0.3s" }}>
                <i class="fas fa-paint-roller d-block text-center text-secondary" style={{ fontSize: "2.5em" }}></i>
                <p className='text-center'>Painting</p>
              </div>
            </a>
          </Col>

          <Col className="col-md-3 my-3">
            <a href={`/book-service/air-conditioning`} className="text-secondary service-link" style={{transition:"0.3s",textDecoration: "none"}}>
              <div className='rounded mx-auto pt-3' style={{ width: "50%", transition: "0.3s" }}>
                <i class="fas fa-fan d-block text-center text-secondary" style={{ fontSize: "2.5em" }}></i>
                <p className='text-center'>Air Conditioning</p>
              </div>
            </a>
          </Col>
        </Row>
      </Container>

      <div className='container text-light mt-4' style={{background : "#065157", height: "100px", borderRadius: "8px"}}>
        <h3 className='text-center pt-2'>Why Us?</h3>
        <p className='text-center'> Easywork has been running in Nepal since 2070 which finish work in very short period of time. We are the most trustworthy company and we provide cash payment.</p>
        
      </div>



      <div className='container d-flex mt-5'>
        <span className='text-center text-dark mx-auto' style={{ fontWeight: "bold", fontSize: "1.7em" }}>100+ <br />Workers</span>
        <span className='text-center text-dark mx-auto' style={{ fontWeight: "bold", fontSize: "1.7em" }}>500+ <br />Services Provided</span>
        <span className='text-center text-dark mx-auto' style={{ fontWeight: "bold", fontSize: "1.7em" }}>1000+ <br />Truested Users</span>
        {/* <span className='text-center text-secondary' style={{fontWeight: "bold", fontSize: "2em"}}>60+ <br /></span> */}
      </div>

    </>
  )
}

export default Homepage;