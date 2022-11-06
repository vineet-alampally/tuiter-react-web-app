import WhatsHappening from "./whats-happening"
import React from "react";
import TuitsList from "../tuits/tuitslist";

const HomeComponent = () => {
    return (
        <>
            <h1>Home</h1>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
}

export default HomeComponent;