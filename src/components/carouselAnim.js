import React from 'react';
import { ReactDOM } from 'react';
import Carousel from "react-elastic-carousel";


const breakPoints = [
    { width: 1, ItemToShow:1 },
    { width: 550, ItemToShow:2 },
    { width: 768, ItemToShow:3 },
    { width: 1200, ItemToShow:4 }
];

function App() {
    return(
        <>
        <h1 style={{ textAlign: "center" }}>Example to setup a react carousel</h1>
        <div className="App">
            <Carousel breakPoints={breakPoints}>
                <Item>One</Item>
                <Item>Two</Item>
                <Item>Three</Item>
                <Item>Four</Item>
                <Item>Five</Item>
                <Item>Six</Item>
                <Item>Seven</Item>
                <Item>Eight</Item>
            </Carousel>
        </div>
        </>
    );
}

const rootElement = document.getElementById()