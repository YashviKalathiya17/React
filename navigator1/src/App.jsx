import CommanNavbar from "./components/Navbar"
import { HomePage,AboutPage ,Checkoutpage,Contactpage,Faqpage,Errorpage,Loginpage,Productpage,Adduserpage } from "./pages";
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route,} from "react-router";
import './App.css'
import EditUser from "./pages/EditUser";


const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<CommanNavbar/>}>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/contact" element={<Contactpage/>} />
      <Route path="/checkout" element={<Checkoutpage/>} />
      <Route path="/Faq" element={<Faqpage/>} />
      <Route path="/login" element={<Loginpage/>} />
      <Route path="/product" element={<Productpage/>} />
      <Route path="/adduser" element={<Adduserpage/>} />
      <Route path="/edituser/:id" element={<EditUser/>} />
      <Route path="*" element={<Errorpage/>} />
    </Route>
  )
);

function App() {
  return (
    <>
     <RouterProvider router={routers}></RouterProvider>
  
    </>
  )
}

export default App
