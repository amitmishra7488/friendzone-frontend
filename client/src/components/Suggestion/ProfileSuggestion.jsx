import React from 'react';
import './ProfileSuggestion.css';

const ProfileSuggestion = () => {
    return (
        <div >
            <div className="suggestion-item" >
                <img src="https://picsum.photos/50" alt="amit" />
                <div className="suggestion-info">
                    <p>@coolamitmishra</p>
                    <button>Follow</button>
                </div>
            </div>
        </div>
    );
};

export default ProfileSuggestion;
