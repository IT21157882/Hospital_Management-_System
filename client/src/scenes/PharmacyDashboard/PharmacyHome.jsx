import React, { useState } from 'react';
import backgroundImage from './PharmacyImages/my7.jpg';
import Footer from "../../components/footer";
import Navbar from '../../components/navbar';
import './index.css';
import { MDBBtn } from 'mdb-react-ui-kit';

function PharmacyHome() {
    const [showBasic, setShowBasic] = useState(false);
    return (
       <>
            <Navbar/>

            <section id="hero">
                <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
                            <div className="container">
                                <h2>Arogya <span> Pharmacy</span></h2>
                                <p><b>The pharmacy is the one place where all our patients converge at some point or the other during a visit to Arogya Hospitals and that is why we ensure that all Arogya Pharmacies are well stocked with products that match the most stringent international standards, and manned by efficient, qualified personnel. The Arogya Pharmacy is open 24 hours a day, seven days a week. It sells prescription-only medicine (POM) at Government approved prices. With our patients’ well-being a top priority we ensure that all our pharmaceutical products are stored according to international storage guidelines.</b></p><br/>

                                <MDBBtn className="m-2" tag="a" outline size="lg" rel="nofollow" target="_blank" href='https://www.youtube.com/watch?v=c9B4TPnak1A'  color="black" style={{ color: 'white' , backgroundColor: '#3fbbc0' } } >
                                    Make an Order
                                </MDBBtn>

                                <MDBBtn className="m-2" tag="a" outline size="lg" rel="nofollow" target="_blank" href='https://www.youtube.com/watch?v=c9B4TPnak1A'  color="black" style={{ color: 'white' , backgroundColor: '#3fbbc0' } } >
                                    Your Orders
                                </MDBBtn>
                                <br/><br/>

                                <h5><a href='https://www.example.com'><u>Pharmacy Admin Pannel</u> </a></h5><br/><br/>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    <Footer/>
  </>
        
    );
}

export default PharmacyHome;