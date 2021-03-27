import React from 'react';
import "./TryAgain.css"

const TryAgain=({
    words,
    characters,
    wpm,
    startAgain
})=>{
    return(
        <div className="try-again-container">
            <h1>Test Result</h1>
            <div className="result-container">
                <p>
                    <b>Characters:</b> {characters}
                </p>
                <p>
                    <b>Words:</b> {words}
                </p>
                <p>
                    <b>WPM:</b>{wpm} wpm
                </p>
            </div>
            <button onClick={()=>startAgain()} className="end-buttons start-again-btn">Re-Try</button>

        </div>
    );
};
export default TryAgain;