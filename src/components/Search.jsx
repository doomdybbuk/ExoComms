import React from "react";

const Search = () =>{
    return(
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a user" />
            </div>
            <div className="userChat">
                <img src="https://i.ibb.co/cLdxrjc/portfolio-Image.jpg" alt="" />
                <div className="userChatInfo">
                    <span>Manan</span>
                </div>
            </div>
        </div>
    )
}

export default Search;