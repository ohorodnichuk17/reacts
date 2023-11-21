import React from "react";
import "./styles.css";
import ArticleComponent from "./ArticleComponent";
import RatingComponent from "./RaitingComponent";

export default function App() {
    const articleData = {
        title: "Sample Article",
        text:
            "This is the content of the article. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        author: "John Doe"
    };

    return (
        <div className="App">
            <ArticleComponent
                title={articleData.title}
                text={articleData.text}
                author={articleData.author}
            />
            <RatingComponent />
        </div>
    );
}
