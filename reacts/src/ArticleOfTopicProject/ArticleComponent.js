import React from "react";

const ArticleComponent = (props) => {
    return (
        <div className="article">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <p>Author: {props.author}</p>
        </div>
    );
};

export default ArticleComponent;
