import React from 'react';
import { Link } from 'react-router-dom';
import './CardComponent.css';

const cardData = [
    {
        id: 1,
        imagePath: '/Images/cities_program.png',
        description: "Explore Ukraine's cities: Kyiv, Rivne, Kharkiv, Lviv. Discover their charm and population statistics.",
        route: '/cities-program'
    },
    {
        id: 2,
        imagePath: '/Images/articleOfTopic.png',
        description: 'Explore React basics with an article display app. Create components for layout, author info, and text. Implement rating, likes, and state hooks for dynamic user interactions.',
        route: '/article-of-topic'
    },
    {
        id: 3,
        imagePath: '/Images/card_generator.png',
        description: 'Explore React basics with an article display app. Create components for layout, author info, and text. Implement rating, likes, and state hooks for dynamic user interactions.',
        route: '/card-generator'
    },
    {
        id: 4,
        imagePath: '/Images/quote_of_the_day.png',
        description: 'Quote of the Day" app: Click for daily inspiration. Displays quotes and author info. Toggle visibility with buttons. Utilizes functional components, props, state, and styles.',
        route: '/quote-of-the-day'
    },
    {
        id: 5,
        imagePath: '/Images/artist_biography.png',
        description: 'Explore the world of a renowned artist with a React app featuring biography, masterpieces, and a dynamic gallery.',
        route: '/artist-biography'
    },
    {
        id: 6,
        imagePath: '/Images/registration.png',
        description: 'Dynamic React application featuring user registration, article display, and interactive comment functionality. Modern, versatile, and user-friendly web development.',
        route: '/registration-form'
    }
];

const CardComponent = () => {
    return (
        <div className="card-container">
            {cardData.map(card => (
                <div key={card.id} className="card">
                    <img
                        className="card-image"
                        src={process.env.PUBLIC_URL + card.imagePath}
                        alt="Card Image"
                    />

                    <div className="card-content">
                        <p className="card-description">
                            {card.description}
                        </p>
                        <Link to={card.route}>
                            <button className="watch-button">Watch</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardComponent;
