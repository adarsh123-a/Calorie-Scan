import React from 'react'
import logo from "../Images/logo.png"
import "./HomePage.css"
// import { FaLongArrowAltRight } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
     const { loginWithRedirect,isAuthenticated,logout } = useAuth0();
  return (
    <>
            <div className='main'>

                   {/* Navbar */}
                   <div className='navbar'>
                   <div className='logo'>
                        <img src={logo} />  
                   </div>
                   <a href='#'>Home</a> 
                        <a href='#'>Product</a>          
                        {isAuthenticated ? (                                                                                      
                          <button onClick={() => logout({logoutParams: { returnTo: window.location.origin }})}>Logout</button>
                        ) : (
                          <button onClick={() => loginWithRedirect()}>Login</button>
                        )}
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