import React, {Component} from "react";
import backgroundImage from './PharmacyImages/my14.jpg';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
  } from "mdb-react-ui-kit";
  import Footer from "../../components/footer";
  import Navbar from '../../components/navbar';

function Cart () {
  return (
    <>
    <Navbar />

<br/><br/><br/>
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
<section className="h-100" >
  <MDBContainer className="py-5 h-100" style={{backgroundColor: 'rgba(252,252,253,0.7)', backdropFilter: 'blur(5px)' }}>
    <MDBRow className="justify-content-center align-items-center h-100">
      <MDBCol md="10">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
            Shopping Cart
          </MDBTypography> 
          <div>
            <p className="mb-0">
              <span className="text-muted">Sort by:</span>
              <a href="#!" className="text-body">
                price <i className="fas fa-angle-down mt-1"></i>
              </a>
            </p>
          </div>
        </div>

        <MDBCard className="rounded-3 mb-4">
          <MDBCardBody className="p-4">
            <MDBRow className="justify-content-between align-items-center">
              
              <MDBCol md="3" lg="3" xl="3">
                <p className="lead fw-normal mb-2"><b>Medicine Name</b></p>
                <p>
                  
                  <span className="text-muted">Amount </span>
                </p>
              </MDBCol>
              <MDBCol md="3" lg="3" xl="2"
                className="d-flex align-items-center justify-content-around">
                <MDBBtn color="link" className="px-2">
                  <MDBIcon fas icon="minus" />
                </MDBBtn>

                <MDBInput min={0} defaultValue={2} max={3} type="number" size="sm" style={{ backgroundColor: 'white' }}/>

                <MDBBtn color="link" className="px-2">
                  <MDBIcon fas icon="plus" />
                </MDBBtn>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                <MDBTypography tag="h5" className="mb-0">
                  Rs.500.00
                </MDBTypography>
              </MDBCol>
              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-danger">
                  <MDBIcon fas icon="trash text-danger" size="lg" />
                </a>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="rounded-3 mb-4">
          <MDBCardBody className="p-4">
            <MDBRow className="justify-content-between align-items-center">
              
              <MDBCol md="3" lg="3" xl="3">
                <p className="lead fw-normal mb-2"><b>Medicine Name</b></p>
                <p>
                  
                  <span className="text-muted">Amount</span>
                </p>
              </MDBCol>
              <MDBCol md="3" lg="3" xl="2"
                className="d-flex align-items-center justify-content-around">
                <MDBBtn color="link" className="px-2">
                  <MDBIcon fas icon="minus" />
                </MDBBtn>

                <MDBInput min={0} defaultValue={2} max={3} type="number" size="sm" style={{ backgroundColor: 'white' }}/>

                <MDBBtn color="link" className="px-2">
                  <MDBIcon fas icon="plus" />
                </MDBBtn>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                <MDBTypography tag="h5" className="mb-0">
                Rs.500.00
                </MDBTypography>
              </MDBCol>
              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-danger">
                  <MDBIcon fas icon="trash text-danger" size="lg" />
                </a>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="rounded-3 mb-4">
          <MDBCardBody className="p-4">
            <MDBRow className="justify-content-between align-items-center">
              
              <MDBCol md="3" lg="3" xl="3">
                <p className="lead fw-normal mb-2"><b>Medicine Name</b></p>
                <p>
                  
                  <span className="text-muted">Amount</span>
                </p>
              </MDBCol>
              <MDBCol md="3" lg="3" xl="2"
                className="d-flex align-items-center justify-content-around">
                <MDBBtn color="link" className="px-2">
                  <MDBIcon fas icon="minus" />
                </MDBBtn>

                <MDBInput min={0} defaultValue={2} max={3} type="number" size="sm" style={{ backgroundColor: 'white' }}/>

                <MDBBtn color="link" className="px-2">
                  <MDBIcon fas icon="plus" />
                </MDBBtn>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                <MDBTypography tag="h5" className="mb-0">
                Rs.500.00
                </MDBTypography>
              </MDBCol>
              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-danger">
                  <MDBIcon fas icon="trash text-danger" size="lg" />
                </a>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>

        <div className="d-flex justify-content-end">
      <MDBBtn className="ml-auto" color="orange" style={{ color: 'white' , backgroundColor: '#3fbbc0' } }>Check Out</MDBBtn>
    </div>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>

<Footer />
</div>
    </>
  );
}

export default Cart;