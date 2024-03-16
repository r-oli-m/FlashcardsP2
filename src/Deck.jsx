import React, { useState } from "react";
import Flashcard from "./Flashcard";
import "./Deck.css";

const flashcards = [
    { front: "College/University", back: "대학 (taehak)" },
    { front: "도서관 (doseogwan) ", back: "Library" },
    { front: "Assignment", back: "과제 (gwaje)" },
    { front: "수업 (sueop)", back: "Class/ Lesson" },
    { front: "Student", back: "학생 (haksaeng)" },
    { front: "연필 (yeonpil)", back: "Pencil" },
    { front: "Lecture", back: "강의 (gangui)" },
    { front: "종이 (jongi)", back: "Paper" },
    { front: "Professor", back: "교수 (gyosu)" },
    { front: "시험 (siheom)", back: "Exam/ Test" },
    { front: "Campus", back: "캠퍼스 (kaempeoseu) " },
    { front: "의자 (uija)", back: "Chair" },
    { front: "Degree", back: "학위 (hakwi)" }
];

const Deck = () => {
    const [currCardIndex, setCurrCardIndex] = useState(0);
    const [input, setInput] = useState('')
    const [isCorrect, setIsCorrect] = useState(null);
    const [currentStreak, setCurrentStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);

    const handleInputChange = (e) => {
        setInput(e.target.value)
        setIsCorrect(null)
    }
    const handleSubmit = (e) => { // check ig guess is ans
        e.preventDefault()
        console.log(input)
        if (flashcards[currCardIndex].back.toLowerCase().includes(input)) {
            console.log("Correct!")
            setIsCorrect(true)
            setCurrentStreak(currentStreak + 1);
            setLongestStreak(Math.max(currentStreak + 1, longestStreak));
        }
        else {
            console.log("Incorrect!")
            setIsCorrect(false)
            setCurrentStreak(0);
        }
    }

    function handlePrevCard(event) {
        event.stopPropagation(); // Stop event propagation to prevent card flip
        // Calculate the new index for the previous card
        const newIndex = (currCardIndex - 1 + flashcards.length) % flashcards.length;
        setCurrCardIndex(newIndex);
        setIsCorrect(null)
        setInput('')

    }

    function handleNextCard(event) {
        event.stopPropagation(); // Stop event propagation to prevent card flip
        // Calculate the new index for the next card
        const newIndex = (currCardIndex + 1) % flashcards.length;
        setCurrCardIndex(newIndex);
        setIsCorrect(null)
        setInput('')

    }

    return (
        <div className="Deck">
            <h4>Current Streak: <span className="streak">{currentStreak}</span>
                <span style={{ marginLeft: '30px' }}></span>
                Longest Streak: <span className="streak">{longestStreak}</span>
            </h4>
            <div>
                <Flashcard key={currCardIndex}
                    fContent={flashcards[currCardIndex].front}
                    bContent={flashcards[currCardIndex].back} />
            </div>
            <div className="guess-area">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="I think it's..."
                    style={{ width: "25%", fontSize: "40px" }}
                    className={"inputting " + (isCorrect === true ? 'correct' : isCorrect === false ? 'wrong' : 'neutral')}
                />
                <button
                    onClick={handleSubmit}
                    style={{ height: "100px", fontSize: "40px", padding: "10px", marginLeft: "20px", borderRadius: "15%" }}
                >
                    Go! 🚀
                </button>
            </div>
            <div className="arrow-button" style={{ padding: "30px", display: "flex", justifyContent: "center", gap: "40px" }}>
                <button
                    onClick={handlePrevCard}>
                    ←
                </button>
                <button
                    onClick={handleNextCard}>
                    →
                </button>
            </div>
        </div>
    );
}

export default Deck;
