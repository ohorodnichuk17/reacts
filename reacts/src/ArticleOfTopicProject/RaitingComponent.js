import React, { useState } from "react";

const RatingComponent = () => {
    const [rating, setRating] = useState(0);

    const handleLike = () => {
        setRating(rating + 1);
    };

    const handleDislike = () => {
        setRating(rating - 1);
    };

    return (
        <div className="rating">
            <p>Rating: {rating}</p>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleDislike}>Dislike</button>
        </div>
    );
};

export default RatingComponent;
