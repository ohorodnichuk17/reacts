import React, { useState } from 'react';
import App from "./App";

const AddPainting = () => {
    const [painting, setPainting] = useState({
        title: '',
        description: '',
        genre: '',
        author: '',
        year: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPainting((prevPainting) => ({
            ...prevPainting,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Нова картина:', painting);
    };

    return (
        <div className="add-painting-container">
            <App />
            <h2 style={{ color: '#333' }}>Add a New Painting</h2>
            <form className="painting-form" onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="input-field"
                    value={painting.title}
                    onChange={handleChange}
                />

                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    className="input-field"
                    value={painting.description}
                    onChange={handleChange}
                ></textarea>

                <label htmlFor="genre">Genre:</label>
                <input
                    type="text"
                    id="genre"
                    name="genre"
                    className="input-field"
                    value={painting.genre}
                    onChange={handleChange}
                />

                <label htmlFor="author">Author:</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    className="input-field"
                    value={painting.author}
                    onChange={handleChange}
                />

                <label htmlFor="year">Year of Writing:</label>
                <input
                    type="text"
                    id="year"
                    name="year"
                    className="input-field"
                    value={painting.year}
                    onChange={handleChange}
                />

                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddPainting;
