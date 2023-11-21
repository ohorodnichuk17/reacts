import React from "react";
import "./styles.css";
import App from "./App";

const ArtistBio = () => {
    return (
        <div className="add-painting-container">
            <App />
            <h2 className="heading">Artist Biography</h2>
            <p>
                Vincent van Gogh (1853-1890) was a Dutch Post-Impressionist painter
                known for his vibrant colors and emotional expression. He created more
                than 2,000 artworks, including around 860 oil paintings, most of them in
                the last two years of his life.
            </p>
            <p>
                Van Gogh's most famous works include "Starry Night," "Sunflowers," and
                "The Bedroom." His unique style and contribution to the art world have
                made him an enduring and influential figure in Western art history.
            </p>
        </div>
    );
};

export default ArtistBio;
