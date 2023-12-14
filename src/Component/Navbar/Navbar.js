import "./Navbar.css"
import {FaBars,FaXmark} from "react-icons/fa6"
import {useState} from "react";

const Navbar = () => {
    const [nav,setNav]=useState("close")
    const showHandler=(icon)=>{
        setNav(icon)
    }
    return (
        <div className={"navbar"}>
            <div className={"navbar-logo"}>RentalX.</div>
            <FaBars onClick={()=>{showHandler("open")}} className={"display"}/>
            <div className={`navbar-bottom ${nav}`}>
                <div className={"navbar-txt"}>
                    <FaXmark onClick={()=>{showHandler("close")}} className={"display"}/>
                    <div>Rent</div>
                    <div>Share</div>
                    <div>Ride</div>
                    <div>Service</div>
                </div>
                <div className={"navbar-btn"}>
                    <button id={"sign-up"}>Sign up</button>
                    <button id={"sign-in"}>Sign in</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;