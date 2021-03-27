import React from 'react'
import "./TestLetter.css"

const TestLetter=({individualLetterInfo})=> {
    const statusClass={
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted: "test-letter-not-attempted",

    }[individualLetterInfo.status];
    return (
       <span className={`test-letter ${statusClass}`}>{individualLetterInfo.testLetter}</span>
    )
};
export default TestLetter;
