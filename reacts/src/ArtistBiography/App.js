import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./main.css";
import ArtistBio from "./ArtistBio";
import FamousPainting from "./FamousPainting";
import PaintingCollection from "./PaintingCollection";
import AddPainting from "./AddPainting";

function App() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<div>
			<header>
				<h3>Artist Biography</h3>
				<nav ref={navRef}>
					<Link to="/#">Home</Link>
					<Link to="/artist-biography/bio">Biography</Link>
					<Link to="/artist-biography/famous-painting">Famous painting</Link>
					<Link to="/artist-biography/painting-collection">Painting collection</Link>
					<Link to="/artist-biography/add-painting">Add painting</Link>
					<button className="nav-btn nav-close-btn" onClick={showNavbar}>
						<FaTimes />
					</button>
				</nav>
				<button className="nav-btn" onClick={showNavbar}>
					<FaBars />
				</button>
			</header>
			<Routes>
				<Route path="/bio" element={<ArtistBio />} />
				<Route path="/famous-painting" element={<FamousPainting />} />
				<Route path="/painting-collection" element={<PaintingCollection />} />
				<Route path="/add-painting" element={<AddPainting />} />
			</Routes>
		</div>
	);
}

export default App;
