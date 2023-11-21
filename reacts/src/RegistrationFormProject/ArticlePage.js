import React, { useState } from 'react';

const ArticlePage = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        if (!newComment) {
            alert('Please enter a comment');
            return;
        }

        setComments([...comments, newComment]);
        setNewComment('');
    };

    return (
        <div>
            <h2>Article Title</h2>
            <p>Article content goes here.</p>
            <h3>Comments</h3>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
            <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)}></textarea>
            <br />
            <button onClick={handleAddComment}>Add Comment</button>
        </div>
    );
};

export default ArticlePage;
