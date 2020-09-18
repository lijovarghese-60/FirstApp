import "./index.css";
import React from "react";
import { Successbtn } from "../buttons/Successbtn";
import { Dangerbtn } from "../buttons/Dangerbtn";



export const Navbar = ({ btn1Name, btn2Name, name = "default" }) => {

    return (
        <div className="cntnr">
            {/**/}
            <div>
                <img src="" alt="logo"></img>
                <h3>{name}</h3>
                <input type="text" />
            </div>

            {/**/}
            <div>
                <a href="">Home</a>
                <a href="">About</a>
            </div>

            {/**/}
            <div>
                <Successbtn buttn={btn1Name}/>
                <Dangerbtn buttn={btn2Name}/>
            </div>
        </div>
    );
};
