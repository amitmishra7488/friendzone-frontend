import './post.css';
import React from 'react';
import { FaHeart, FaComment } from 'react-icons/fa';

const Post = () => {
    return (
        <div className="post-card">
            <img src="https://images8.alphacoders.com/418/418952.jpg" alt="Post" className="post-card-image" />
            <div className="post-card-info">
                <div className="post-card-username">username</div>
                <div className="post-card-caption">Caption goes here...</div>
                <div className="post-card-likes">
                    <FaHeart /> 123
                </div>
                <div className="post-card-comments">
                    <FaComment /> 45
                </div>
            </div>
        </div>
    );
};

export default Post;
