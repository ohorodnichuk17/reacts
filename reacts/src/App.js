import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardComponent from './CardComponent';
import CitiesProgram from './CitiesProject/CitiesProgram';
import ArticleOfTopic from './ArticleOfTopicProject/ArticleOfTopic';
import CardGenerator from './CardGeneratorProject/App';
import QuoteOfTheDay from './QuoteOfTheDayProject/App';
import ArtistBiography from './ArtistBiography/App';
import ArtistBio from "./ArtistBiography/ArtistBio";
import AddPainting from "./ArtistBiography/AddPainting";
import FamousPainting from "./ArtistBiography/FamousPainting";
import PaintingCollection from "./ArtistBiography/PaintingCollection";
import RegistrationForm from "./RegistrationFormProject/RegistrationForm";

function Home() {
    return (
        <div className="App">
            <CardComponent />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cities-program" element={<CitiesProgram />} />
                <Route path="/article-of-topic" element={<ArticleOfTopic />} />
                <Route path="/card-generator" element={<CardGenerator />} />
                <Route path="/quote-of-the-day" element={<QuoteOfTheDay />} />
                <Route path="/artist-biography" element={<ArtistBiography />} />
                <Route path="/artist-biography/bio" element={<ArtistBio />} />
                <Route path="/artist-biography/add-painting" element={<AddPainting />} />
                <Route path="/artist-biography/famous-painting" element={<FamousPainting />} />
                <Route path="/artist-biography/painting-collection" element={<PaintingCollection />} />
                <Route path="/registration-form" element={<RegistrationForm />} />
            </Routes>
        </Router>
    );
}

export default App;
