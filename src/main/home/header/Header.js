import React from "react";
import { Navbar } from "./navbar/Navbar";

export const Header = () => {
    const btn1 = "success";
    const btn2 = "danger";
    const webname = "Sample Webite 2";
    return <Navbar name={webname} btn1Name={btn1} btn2Name={btn2} />;

};