import React from "react";
import ChallengeCard from "../ChallengeCards/ChallengeCards";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeContainer.css";

const TypingChallengeContainer = ({
  selectedParagraph,
  timeRemaining,
  timerStarted,
  words,
  characters,
  wpm,
  testInfo,
  onInputChange
}) => {
  return (
    <div className="typing-challenge-container">
      <div className="details-container">
        <ChallengeCard cardname="words" cardvalue={words} />
        <ChallengeCard cardname="characters" cardvalue={characters} />
        <ChallengeCard cardname="speed" cardvalue={wpm} />
      </div>

      <div className="typewriter-container">
        <TypingChallenge
          onInputChange={onInputChange}
          testInfo={testInfo}
          selectedParagraph={selectedParagraph}
          timerStarted={timerStarted}
          timeRemaining={timeRemaining}
        />
      </div>
    </div>
  );
};

export default TypingChallengeContainer;
