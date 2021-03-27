import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChallengeSection.css";

const ChallengeSection = (props) => {
  return (
    <div className="challenge-container">
      <h1 data-aos="fade-down" className="challenge-header">
        Take A Speed test..
      </h1>
      <TestContainer
        selectedParagraph={props.selectedParagraph}
        timeRemaining={props.timeRemaining}
        timerStarted={props.timerStarted}
        words={props.words}
        characters={props.characters}
        wpm={props.wpm}
        testInfo={props.testInfo}
        onInputChange={props.onInputChange}
        startAgain={props.startAgain}


      />
    </div>
  );
};

export default ChallengeSection;
