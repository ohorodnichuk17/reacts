import React, { useState } from "react";
import "./styles.css";

const CardGenerator = () => {
    const [cards, setCards] = useState([]);

    const generateRandomCard = () => {
        const types = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King"
        ];
        const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

        const randomType = types[Math.floor(Math.random() * types.length)];
        const randomSuit = suits[Math.floor(Math.random() * suits.length)];

        const newCard = `${randomType} of ${randomSuit}`;
        setCards([...cards, newCard]);
    };

    return (
        <div>
            <button onClick={generateRandomCard}>Generate Card</button>
            <ul>
                {cards.map((card, index) => (
                    <li key={index}>{card}</li>
                ))}
            </ul>
        </div>
    );
};

export default function App() {
    return (
        <div className="App">
            <CardGenerator />
        </div>
    );
}
