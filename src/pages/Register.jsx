import React, { useState } from "react";
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase"

const Register = () =>{
    const [err,setErr] = useState(false)
    // This function will check for the input 0-> Name , 1-> Email id 2-> Password and 3 -> The avatar. This is useful for authentication
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0]; // .files will take input as files and [0] means that only this first file is acceptable

        try{
            const res =  await createUserWithEmailAndPassword(auth,email,password);
        }catch(err){
            setErr(true);
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">ExoComms</span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Display Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add an Avatar</span>
                    </label>
                    <button>Sign Up</button>
                    {err &&<span>Something went wrong</span>}
                </form>  
                <p>You do Have an account ?<a href="Login">Login</a></p>
            </div>
        </div>
    )
}
export default Register;