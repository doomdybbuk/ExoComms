import React from "react";
import Sidebar from "../components/Sidebar";
import Search from "../components/Search";
import Navbar from "../components/Navbar";
import Message from "../components/Message";
import Input from "../components/Input";
import Chats from "../components/Chats";
import Chat from "../components/Chat";

const Home = () =>{
    return(
        <div className="home">
            <div className="container">
                <Sidebar/>
                {/* <Search/>
                <Navbar/>
                <Message/>
                <Input/>
                <Chats/> */}
                <Chat/>
            </div>
        </div>
    )
}

export default Home;