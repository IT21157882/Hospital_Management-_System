import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import Loginpage from './scenes/Loginpage'
import Homepage from './scenes/Homepage'
import AmbulanceDashboard from './scenes/AmbulanceDashboard'
import EmployeeManagerDashboard from './scenes/EmployeeManagerDashboard'
import InventoryDashboard from './scenes/InventoryDashboard'
import LaboratoryDashboard from './scenes/LaboratoryDashboard'
import PharmacyDashboard from './scenes/PharmacyDashboard'
import ProfilePage from './scenes/ProfilePage'
import WardManagerDashboard from './scenes/WardManagerDashboard'
import ServicesPage from './scenes/ServicesPage'
import VideoRequestForm from './scenes/VideoRequestForm'
import RoomPage from './scenes/VideoRoom'
import VideoUI from './scenes/VideoConference'
import PharmacyHome from './scenes/PharmacyDashboard/PharmacyHome'
import MakeOrder from './scenes/PharmacyDashboard/MakeOrder'
import AdminLogin from './scenes/PharmacyDashboard/AdminLogin'
import YourOrder from './scenes/PharmacyDashboard/YourOrder'
import AdminHome from './scenes/PharmacyDashboard/AdminHome'
import Cart from './scenes/PharmacyDashboard/Cart'
import Prescription from './scenes/PharmacyDashboard/Prescription'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/login' element={ <Loginpage /> } />
                    <Route path='/AmbulanceDashboard' element={<AmbulanceDashboard />} />
                    <Route path='/EmployeeManagerDashboard' element={<EmployeeManagerDashboard />} />
                    <Route path='/InventoryDashboard' element={<InventoryDashboard />} />
                    <Route path='/LaboratoryDashboard' element={<LaboratoryDashboard />} />
                    <Route path='/PharmacyDashboard' element={<Cart />} />
                    <Route path='/ProfilePage' element={<ProfilePage />} />
                    <Route path='/WardManagerDashboard' element={<WardManagerDashboard />} />
                    <Route path='/ServicesPage' element={<ServicesPage/>}/>
                    <Route path='/VideoRequestForm' element={<VideoRequestForm/>}/>
                    <Route path='/VideoUI' element={<VideoUI/>}/>
                    <Route path='/room/:roomID' element={<RoomPage/>}/>
                </Routes>
            </BrowserRouter>            
        </div>
    );
}

export default App;

//Tharaka source code
// import Navbar from "./components/navbar";
// import Home  from "./components/home";
// import Footer from "./components/footer";
// import Loginpage from "./scenes/Loginpage";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Routers>
//       <Navbar/>
//       <Home/>
//       <Footer/>
//       </Routers>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
