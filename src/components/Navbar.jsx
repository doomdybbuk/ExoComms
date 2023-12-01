import React from "react";

const Navbar = () =>{
    return(
        <div className="navbar">
            <span className="logo">ExoComms</span>
            <div className="user">
                <img src="https://i.ibb.co/cLdxrjc/portfolio-Image.jpg" alt="" />
                <span>Manan</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar;   