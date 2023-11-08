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
    MDBFile
  }
  from 'mdb-react-ui-kit';
import backgroundImage from './PharmacyImages/my4.jpg';
import Footer from "../../components/footer";
import Navbar from '../../components/navbar';

function MakeOrder() {
    return (
        <>      
            <Navbar/>
            <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                <MDBContainer fluid>
                    <MDBRow className='d-flex justify-content-center align-items-center'>
                        <MDBCol lg='6' className='my-5'>
                                <MDBCard className='forms' style={{backgroundColor: 'rgba(252,252,253,0.7)', backdropFilter: 'blur(5px)' }}>
                                    <h1 class="text-Black mb-4">Make Your Order Here</h1>
                                    <MDBCardBody className='px-4'>
                                        <MDBRow className='align-items-center pt-4 pb-3'>
                                            <MDBCol md='3' className='ps-5'>
                                                <h6 className="mb-0">Name</h6>
                                            </MDBCol>

                                            <MDBCol md='9' className='pe-5'>
                                                <MDBInput  size='lg' id='form1' type='text' placeholder='' style={{ backgroundColor: 'white' }}/>
                                            </MDBCol>
                                        </MDBRow>                            

                                        <MDBRow className='align-items-center pt-4 pb-3'>
                                            <MDBCol md='3' className='ps-5'>
                                                <h6 className="mb-0">Age</h6>
                                            </MDBCol>

                                            <MDBCol md='9' className='pe-5'>
                                                <MDBInput  size='lg' id='form1' type='text'style={{ backgroundColor: 'white' }}/>
                                            </MDBCol>
                                        </MDBRow>
                         
                                        <MDBRow className='align-items-center pt-4 pb-3'>
                                            <MDBCol md='3' className='ps-5'>
                                                <h6 className="mb-0">Contact Number</h6>
                                            </MDBCol>

                                            <MDBCol md='9' className='pe-5'>
                                                <MDBInput  size='lg' id='form1' type='text' style={{ backgroundColor: 'white' }}/>
                                            </MDBCol>
                                        </MDBRow>
                                                   
                                        <MDBRow className='align-items-center pt-4 pb-3'>
                                            <MDBCol md='3' className='ps-5'>
                                                <h6 className="mb-0">Message</h6>
                                            </MDBCol>

                                            <MDBCol md='9' className='pe-5'>
                                                <MDBTextArea  id='textAreaExample' rows={3} style={{ backgroundColor: 'white' }}/>
                                            </MDBCol>
                                        </MDBRow>

                                        <MDBRow className='align-items-center pt-4 pb-3'>
                                            <MDBCol md='3' className='ps-5'>
                                                <h6 className="mb-0">Upload Prescription</h6>
                                            </MDBCol>

                                            <MDBCol md='9' className='pe-5'>
                                                <MDBFile size='lg' id='customFile' />
                                                {/*
                                                <div className="small text-muted mt-2">Upload your prescription or any other relevant file. Max file size 50 MB</div>
                                                */}
                                            </MDBCol>

                                        </MDBRow>

                                        <MDBBtn className='my-4' size='lg' color='black' style={{ color: 'white' , backgroundColor: '#3fbbc0' } }>Confirm</MDBBtn>

                                    </MDBCardBody>
                                </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
            <Footer/>
        </>
    )
}

export default MakeOrder;

