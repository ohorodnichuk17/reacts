import React from "react";
import "./styles.css";
import App from "./App";

const PaintingCollection = () => {
    return (
        <div className="add-painting-container">
            <App/>
            <h2 className="heading">Painting Collection</h2>
            <p>
                Explore the diverse collection of paintings by Vincent van Gogh. Each
                piece tells a unique story and showcases the artist's exceptional talent
                and creativity. Van Gogh's works include landscapes, portraits, and
                still lifes that continue to captivate art enthusiasts worldwide.
            </p>
        </div>
    );
};

export default PaintingCollection;
