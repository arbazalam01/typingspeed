import React from "react";
import { SAMPLE_PARAGRAPHS } from "../src/data/sampleParagraphs";
import ChallengeSection from "../src/components/ChallengeSection/ChallengeSection";
import Footer from "../src/components/Footer/Footer";
import Landing from "../src/components/Landing/Landing";
import Nav from "../src/components/Navbar/Navbar";
import "./app.css";

const TotalTime = 60;
const DefaultState = {
  selectedParagraph: "Hello World!",
  testInfo: [],
  timerStarted: false,
  timeRemaining: TotalTime,
  words: 0,
  characters: 0,
  wpm: 0,
};

class App extends React.Component {
  state = DefaultState;

  fetchNewParagraphFallback = () => {
    const data =
      SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];

    const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });

    // Update the testInfo in state
    this.setState({
      ...DefaultState,
      selectedParagraph: data,
      testInfo,
    });
  };

  fetchNewParagraph = () => {
    fetch("http://metaphorpsum.com/paragraphs/1/9")
      .then((response) => response.text())
      .then((data) => {
        // Once the api results are here, break the selectedParagraph into test info
        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted",
          };
        });

        // Update the testInfo in state
        this.setState({
          ...DefaultState,
          selectedParagraph: data,
          testInfo,
        });
      });
  };

  componentDidMount() {
    // As soon as the component mounts, load the selected paragraph from the API
    this.fetchNewParagraphFallback();
  }

  startAgain = () => this.fetchNewParagraphFallback();

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        // Change the WPM and Time Remaining
        const timeSpent = TotalTime - this.state.timeRemaining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  handleUserInput = (inputValue) => {
    if (!this.state.timerStarted) this.startTimer();
    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;

    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
      });

      return;
    }

    if (index >= this.state.selectedParagraph.length) {
      this.setState({
        characters,
        words,
      });
      return;
    }

    // Make a copy
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1))
      testInfo[index + 1].status = "notAttempted";

    // Check for mistake
    const isMistake = inputValue[index] === testInfo[index].testLetter;

    // Update the testInfo
    testInfo[index].status = isMistake ? "correct" : "incorrect";

    // Update the state
    this.setState({
      testInfo,
      words,
      characters,
    });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Landing />
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          startAgain={this.startAgain}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
