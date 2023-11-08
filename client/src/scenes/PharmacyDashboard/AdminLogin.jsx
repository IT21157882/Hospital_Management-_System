import React from 'react';
import backgroundImage from './PharmacyImages/my4.jpg';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput
  }
  from 'mdb-react-ui-kit';
  import myImage from './PharmacyImages/my8.jpg';
  import Footer from "../../components/footer";
  import Navbar from '../../components/navbar';

function AdminLogin() {
    return (
        <>
        <Navbar />
        <br/><br/><br/>
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
            <MDBContainer className="my-5" >
                <MDBCard style={{ backgroundColor: 'rgba(252,252,253,0.5)', backdropFilter: 'blur(5px)' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='6'>
                          <MDBCardImage src={myImage} alt="login form" className='rounded-start w-100'/>
                        </MDBCol>

                        <MDBCol md='6'>
                            <MDBCardBody className='d-flex flex-column'>
                                <h3 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Login As Admin</h3>

                                <MDBInput wrapperClass='mb-4' label='User Name' id='formControlLg' type='email' size="lg" style={{ backgroundColor: 'white' }}/>
                                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" style={{ backgroundColor: 'white' }}/>

                                <MDBBtn className="m-2" tag="a" outline size="lg" rel="nofollow" target="_blank" href='#'  color="black" style={{ color: 'white' , backgroundColor: '#3fbbc0' } } >
                                    Login
                                </MDBBtn>

                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBContainer>
        </div>
        <Footer />
        
        </>
    );
}

export default AdminLogin;
