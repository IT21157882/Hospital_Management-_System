/*               search

import "./index.css";
import {DataTable} from "primereact/datatable";
import { Column } from "primereact/column";
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import {useState} from "react";
import {FilterMatchMode} from "primereact/api";
import {InputText} from "primereact/inputtext";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBBtn
  } from "mdb-react-ui-kit";
  import backgroundImage from './PharmacyImages/my14.jpg';
import Footer from "../../components/footer";
import Navbar from '../../components/navbar';

function DoctorHistory () {

    const [filters, setFilters] = useState({
        global: {value: null, matchMode: FilterMatchMode.CONTAINS},
    })

    const data = [
        {
            id: 1,
            name: "Sithumi",
            age: 23,
            phone: "0772435647",
            message: "hi",
            presc: ""
        },
        {
            id: 2,
            name: "Savindi",
            age: 17,
            phone: "0776277635",
            message: "hello",
            presc: ""
        },
        {
            id: 3,
            name: "Senal",
            age: 12,
            phone: "0762536372",
            message: "hey",
            presc: ""
        },
        
    ];
    
    return (
        <>
        <Navbar />

        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                <section className="vh-100" >
                    <MDBContainer className="py-5 h-100" >
                        <MDBRow className="d-flex justify-content-center align-items-center">
                            <MDBCol lg="9" xl="7">
                                <MDBCard className="rounded-3" style={{backgroundColor: 'rgba(252,252,253,0.7)', backdropFilter: 'blur(5px)' }}>
                                    <MDBCardBody className="p-4">
                                        <h4 className="text-center my-3 pb-3">Doctor's Prescription List</h4> 

        <MDBRow className='align-items-center pt-4 pb-3'>
            <MDBCol md='3' className='ps-5'>
                <h6 className="mb-0">Search :</h6>
            </MDBCol>

            <MDBCol md='9' className='pe-5'>
            <InputText 
                    onInput={(e) =>
                        setFilters({
                            global: {value: e.target.value, matchMode:FilterMatchMode.CONTAINS},
                        })
                    }
                />
            </MDBCol>
            </MDBRow>
                

                <DataTable value={data} filters={filters} >
                    <Column field="id" header="ID" sortable/>
                    <Column field="name" header="Name" sortable/>
                    <Column field="age" header="Age" sortable/>
                    <Column field="phone" header="Contact Number" sortable/>
                    <Column field="message" header="Message" sortable/>
                    <Column field="presc" header="Prescription" sortable/>
                    

                </DataTable>

                <MDBBtn type="submit" color="dark">
                                                            Delete All
                                                        </MDBBtn>
                </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
        
            </div>
        <Footer />
        </>
    )
}

export default DoctorHistory;
*/
