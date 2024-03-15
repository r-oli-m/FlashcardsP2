import React, { useState } from "react";
import Flashcard from "./Flashcard";

const flashcards = [
    { front: "College/University", back: "대학 (taehak)" },
    { front: "도서관 (doseogwan) ", back: "Library" },
    { front: "Assignment", back: "과제 (gwaje)" },
    { front: "수업 (sueop)", back: "Class/Lesson" },
    { front: "Student", back: "학생 (haksaeng)" },
    { front: "연필 (yeonpil)", back: "Pencil" },
    { front: "Lecture", back: "강의 (gangui)" },
    { front: "종이 (jongi)", back: "Paper" },
    { front: "Professor", back: "교수 (gyosu)" },
    { front: "시험 (siheom)", back: "Exam/Test" },
    { front: "Campus", back: "캠퍼스 (kaempeoseu) " },
    { front: "의자 (uija)", back: "Chair" },
    { front: "Degree", back: "학위 (hakwi)" }
];

const Deck = () => {
    const [currCardIndex, setCurrCardIndex] = useState(0);

    function handlePrevCard(event) {
        event.stopPropagation(); // Stop event propagation to prevent card flip
        // Calculate the new index for the previous card
        const newIndex = (currCardIndex - 1 + flashcards.length) % flashcards.length;
        setCurrCardIndex(newIndex);
    }

    function handleNextCard(event) {
        event.stopPropagation(); // Stop event propagation to prevent card flip
        // Calculate the new index for the next card
        const newIndex = (currCardIndex + 1) % flashcards.length;
        setCurrCardIndex(newIndex);
    }

    return (
        <div className="Deck">
            <div>
                <Flashcard key={currCardIndex} fContent={flashcards[currCardIndex].front} bContent={flashcards[currCardIndex].back} />
            </div>
            <div style={{ padding: "30px", display: "flex", justifyContent: "center", gap: "40px" }}>
                <button style={{ fontSize: "90px", height: "90px", textAlign: "center" }} onClick={handlePrevCard}>
                    ←
                </button>
                <button style={{ fontSize: "90px", height: "90px", textAlign: "center" }} onClick={handleNextCard}>
                    →
                </button>
            </div>
        </div>
    );
}

export default Deck;
