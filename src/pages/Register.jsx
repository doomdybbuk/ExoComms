import React from "react";
import Add from "../img/addAvatar.png"

const Register = () =>{
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">ExoComms</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="Display Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an Avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>  
                <p>You do Have an account ?<a href="Login">Login</a></p>
            </div>
        </div>
    )
}

export default Register;