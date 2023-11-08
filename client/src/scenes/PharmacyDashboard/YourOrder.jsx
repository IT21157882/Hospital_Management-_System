import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBTextArea,
    MDBCardImage
  }
  from 'mdb-react-ui-kit';
import Footer from "../../components/footer";
import Navbar from '../../components/navbar';
import './index.css';
import backgroundImage from './PharmacyImages/my4.jpg';
import myImage from './PharmacyImages/presc.png';

function YourOrder() {
    return (
        <>
            <Navbar />

            <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }} >
                <br/><br/>
                <MDBContainer fluid>
                    <MDBRow className='d-flex justify-content-center align-items-center'>
                        <MDBCol lg='6' className='my-5'>
                                <MDBCard className='forms' style={{backgroundColor: 'rgba(252,252,253,0.7)', backdropFilter: 'blur(5px)' }}>
                                    <h1 class="text-Black mb-4">Your Order </h1>
                                    
                                    <MDBCardImage src={myImage} alt="login form" className='rounded-start w-100'/>
                                    <MDBCardBody className='px-4'>
                                        <MDBRow className='align-items-center pt-4 pb-3'>
                                            <MDBCol md='3' className='ps-5'>
                                                <h6 className="mb-0">Name</h6>
                                            </MDBCol>

                                            <MDBCol md='9' className='pe-5'>
                                                <MDBInput  value="Sithumi" readOnly size='lg' id='form1' type='text' placeholder='' style={{ backgroundColor: 'white' }}/>
                                            </MDBCol>
                                        </MDBRow>                            

                                        <MDBRow className='align-items-center pt-4 pb-3'>
                                            <MDBCol md='3' className='ps-5'>
                                                <h6 className="mb-0">Age</h6>
                                            </MDBCol>

                                            <MDBCol md='9' className='pe-5'>
                                                <MDBInput  value="23 years" readOnly size='lg' id='form1' type='text'style={{ backgroundColor: 'white' }}/>
                                            </MDBCol>
                                        </MDBRow>
                         
                                        <MDBRow className='align-items-center pt-4 pb-3'>
                                            <MDBCol md='3' className='ps-5'>
                                                <h6 className="mb-0">Contact Number</h6>
                                            </MDBCol>

                                            <MDBCol md='9' className='pe-5'>
                                                <MDBInput  value="0761916182" readOnly size='lg' id='form1' type='text' style={{ backgroundColor: 'white' }}/>
                                            </MDBCol>
                                        </MDBRow>
                                                   
                                        <MDBRow className='align-items-center pt-4 pb-3'>
                                            <MDBCol md='3' className='ps-5'>
                                                <h6 className="mb-0">Message</h6>
                                            </MDBCol>

                                            <MDBCol md='9' className='pe-5'>
                                                <MDBTextArea  value="Hello" readOnly id='textAreaExample' rows={3} style={{ backgroundColor: 'white' }}/>
                                            </MDBCol>
                                        </MDBRow>

                                        <MDBBtn className="m-2" tag="a" outline size="lg" rel="nofollow" target="_blank" href='#'  color="black" style={{ color: 'white' , backgroundColor: '#3fbbc0' } } >
                                            OK
                                        </MDBBtn>

                                        <MDBBtn className="m-2" tag="a" outline size="lg" rel="nofollow" target="_blank" href='#'  color="black" style={{ color: 'white' , backgroundColor: '#3fbbc0' } } >
                                            Cancel Order
                                        </MDBBtn>

                                    </MDBCardBody>
                                </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>      
            <Footer />
        </>
    );
}

export default YourOrder;