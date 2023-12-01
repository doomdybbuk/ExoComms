import React from "react";

const Login = () =>{
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">ExoComms</span>
                <span className="title">Login</span>
                <form>
                    <input type="text" placeholder="Display Name"/>
                    <input type="email" placeholder="Email"/>
                    <button>Login</button>
                </form>  
                <p>You don't have an account ?<a href="Register">Register</a></p>
            </div>
        </div>
    )
}

export default Login;