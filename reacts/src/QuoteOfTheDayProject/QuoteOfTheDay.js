import React, { useState } from 'react';
import './QuoteOfTheDay.css';

const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        date: "2023-11-12"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
        date: "2023-11-12"
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost",
        date: "2023-11-12"
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs",
        date: "2023-11-12"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
        date: "2023-11-12"
    },
];

const QuoteOfTheDay = () => {
    const [visible, setVisible] = useState(false);
    const [currentQuote, setCurrentQuote] = useState({});

    const showRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
        setVisible(true);
    };

    const hideQuote = () => {
        setVisible(false);
    };

    return (
        <div className="quote-container">
            <button onClick={showRandomQuote}>Показати цитату дня</button>
            {visible && (
                <div className="quote">
                    <p>{currentQuote.text}</p>
                    <p>- {currentQuote.author}</p>
                    <p>{currentQuote.date}</p>
                    <button onClick={hideQuote}>Сховати цитату</button>
                </div>
            )}
        </div>
    );
};

export default QuoteOfTheDay;
