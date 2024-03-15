import React, { useState } from "react";
import './Flashcard.css';

const Flashcard = ({fContent, bContent}) => {
    const [isFront, setIsFront] = useState(true);

    // Function to handle card click, toggles between front and back
    function handleCardClick() {
        setIsFront(!isFront);
    }

    return (
        <div className={`flip-card ${isFront ? '' : 'flipped'}`} onClick={handleCardClick}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <div className="content">
                        <p>{fContent}</p>
                    </div>
                </div>

                <div className="flip-card-back">
                    <div className="content">
                        <p>{bContent}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Flashcard;
