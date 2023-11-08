import React, { useState } from 'react';
import backgroundImage from './PharmacyImages/my8.jpg';
import myImage from './PharmacyImages/Avatar.png';
import Footer from "../../components/footer";
import Navbar from '../../components/navbar';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBCardImage,
  MDBCheckbox
} from "mdb-react-ui-kit";

function AdminHome() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <>
            <Navbar />
            <br/><br/><br/><br/>
            <header>        
              <div
                id='intro'
                className='p-5 text-center bg-image'
                style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat' }}
              >
                <div className='mask' style={{ backgroundColor: 'rgba(252, 252, 253, 0.7)' }}>
                  <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-black'>
                    <br/>
                      <h1 className='mb-3'>Arogya Pharmacy Admin Pannel</h1>
                      <br/><br/>
                      
                      <MDBCardImage src={myImage} height={'300px'} width={'200px'} className=' rounded-start w-100'/>
                      <br/><br/>
                      <h4>Miss. Sithumi Nuhansi Bentotage</h4>
                      <h5>Pharmacy Manager</h5>
                      <h6><a href='https://www.example.com'><u>View Your Profile</u> </a></h6><br/><br/>

                    </div>
                  </div>
                </div>
                <MDBCard className="rounded-3" style={{backgroundColor: 'rgba(252,252,253,0.7)', backdropFilter: 'blur(5px)' }}>
                                    <MDBCardBody className="p-4">
                                        <h4 className="text-center my-3 pb-3">Doctor's Prescription List</h4>   

                                        <MDBTable className="mb-4">
                                            <MDBTableHead>
                                                <tr>
                                                <th scope="col">No.</th>
                                                <th scope="col">Order ID</th>
                                                
                                                <th scope="col">Status</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td><a href="https://www.example.com">ID : 001</a></td>
                                                    
                                                    <td>
                                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Checked' />
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td><a href="https://www.example.com">ID : 002</a></td>
                                                    
                                                    <td>
                                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Checked' />
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td><a href="https://www.example.com">ID : 003</a></td>
                                                    
                                                    <td>
                                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Checked' />
                                                    </td>
                                                </tr>
                                            </MDBTableBody>
                                        </MDBTable>
                                    </MDBCardBody>
                                </MDBCard>

                                <MDBCard className="rounded-3" style={{backgroundColor: 'rgba(252,252,253,0.7)', backdropFilter: 'blur(5px)' }}>
                                    <MDBCardBody className="p-4">
                                        <h4 className="text-center my-3 pb-3">Online Prescription List</h4>   

                                        <MDBTable className="mb-4">
                                            <MDBTableHead>
                                                <tr>
                                                <th scope="col">No.</th>
                                                <th scope="col">Order ID</th>
                                                
                                                <th scope="col">Status</th>
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td><a href="https://www.example.com">ID : 001</a></td>
                                                    
                                                    <td>
                                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Checked' />

                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td><a href="https://www.example.com">ID : 002</a></td>
                                                    
                                                    <td>
                                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Checked' />

                                                    </td>
                                                </tr>

                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td><a href="https://www.example.com">ID : 003</a></td>
                                                    
                                                    <td>
                                                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Checked' />

                                                    </td>
                                                </tr>
                                            </MDBTableBody>
                                        </MDBTable>
                                    </MDBCardBody>
                                </MDBCard>
              </div>
            </header>
            <Footer />
        </> 
        
    );
}

export default AdminHome;