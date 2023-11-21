import React from "react";
import "./styles.css";
import App from "./App";

const FamousPainting = () => {
    return (
        <div className="add-painting-container">
            <App/>
            <h2 className="heading">Most Famous Painting</h2>
            <p>
                "Starry Night" (1889) is one of Vincent van Gogh's most famous
                paintings. It depicts a night sky filled with swirling clouds and a
                bright crescent moon. The village below is tranquil, creating a
                contrasting and captivating scene.
            </p>
        </div>
    );
};

export default FamousPainting;
