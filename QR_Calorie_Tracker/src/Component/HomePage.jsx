import React from 'react'
import logo from "../Images/logo.png"
import "./HomePage.css"
// import { FaLongArrowAltRight } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
            <div className='main'>

                   {/* Navbar */}

                   <div className='logo'>
                        <img src={logo} />
                   </div>

                        {/* Herosection */}

                   <div className='Hero'>

                        <div className='leftSection'>
                        <h1>Mindful eating, powerful living.</h1>
                                <button>
                                    Scan QR 
                                </button>
                        </div>

                       
                   </div>

            </div>
    </>
  )
}

export default HomePage