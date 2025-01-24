import { Outlet } from "react-router"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"


const Main = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div className="max-w-[1140px] mx-auto">
      <Outlet></Outlet>
      </div>
       <Footer></Footer>
    </div>
  )
}

export default Main