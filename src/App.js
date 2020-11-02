import React, { Component } from "react";
import "./App.css";

import data from "./data/data.json";
import { PlayerNameForm, Players, Question, RowContainer } from "./components";

class App extends Component {
  state = {
    players: [
      { id: 1, value: 0, name: "Player 1" },
      { id: 2, value: 0, name: "Player 2" },
    ],
    categories: [
      { id: 1, value: "Stats" },
      { id: 2, value: "Abilities" },
      { id: 3, value: "Spells" },
      { id: 4, value: "Maps" },
      { id: 5, value: "Tournaments" },
    ],
    questions: data,
    showPlayerForm: true,
    showPlayers: false,
    showTable: false,
    showQuestion: false,
    showAnswer: false,
  };

  handleRandomizeQuestion = (rowId, id) => {
    const random = Math.floor(Math.random() * 5);
    const row = `row${rowId}`;
    const newQuestions = {
      ...this.state.questions,
      [row]: {
        ...this.state.questions[row],
        [id]: {
          ...this.state.questions[row][id],
          question: this.state.questions[row][id].pool[random].question,
          answer: this.state.questions[row][id].pool[random].answer,
        },
      },
    };

    this.setState({ questions: newQuestions });
  };

  handleIsAnswered = (rowId, id) => {
    const row = `row${rowId}`;
    const newQuestions = {
      ...this.state.questions,
      [row]: {
        ...this.state.questions[row],
        [id]: {
          ...this.state.questions[row][id],
          isAnswered: true,
        },
      },
    };
    this.setState({ questions: newQuestions });
  };

  handleKeyPress = (e) => {
    if (e.key === " " && this.state.showQuestion) {
      if (this.state.showAnswer) this.handleHide("showAnswer");
      else this.handleHide("showAnswer");
    }
  };

  handleHide = (name, question, answer, category, value) => {
    switch (name) {
      case "showPlayerForm":
        this.setState({ showPlayerForm: !this.state.showPlayerForm });
        break;
      case "showPlayers":
        this.setState({ showPlayers: !this.state.showPlayers });
        break;
      case "showTable":
        this.setState({ showTable: !this.state.showTable });
        break;
      case "showQuestion":
        this.setState({
          showTable: !this.state.showTable,
          showQuestion: !this.state.showQuestion,
          question,
          answer,
          category,
          value,
        });
        break;
      case "showAnswer":
        if (this.state.showQuestion) {
          if (this.state.showAnswer) this.handleHide("showQuestion");
          this.setState({ showAnswer: !this.state.showAnswer });
        }
        break;
      default:
        console.log("Nothing to show/hide!");
        break;
    }
  };

  handleSubmit = (players) => {
    const newPlayers = this.state.players.map((p) => ({
      ...p,
      name: players[`${p.id - 1}`].name,
    }));
    this.setState({ players: newPlayers });
    this.handleHide("showPlayerForm");
    this.handleHide("showPlayers");
    this.handleHide("showTable");
  };

  handleIncrement = (player) => {
    const newPlayers = this.state.players.map((p) =>
      p !== player
        ? p
        : {
            ...p,
            value: player.value + 100,
          }
    );
    this.setState({ players: newPlayers });
  };

  handleDecrement = (player) => {
    const newPlayers = this.state.players.map((p) =>
      p !== player
        ? p
        : {
            ...p,
            value: player.value - 100,
          }
    );
    this.setState({ players: newPlayers });
  };

  render() {
    return (
      <div>
        {this.state.showPlayerForm && (
          <PlayerNameForm
            players={this.state.players}
            onSubmit={this.handleSubmit}
          />
        )}
        {this.state.showPlayers && (
          <Players
            players={this.state.players}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        )}
        {this.state.showTable && (
          <div className="container-fluid bg-light fade-in text-responsive">
            <table
              style={{ height: "90vh" }}
              className="table text-center m-0 no-collapse"
            >
              <RowContainer
                questions={this.state.questions}
                categories={this.state.categories}
                onShowQuestion={this.handleHide}
                onAnswered={this.handleIsAnswered}
                onRandomizeQuestion={this.handleRandomizeQuestion}
              />
            </table>
          </div>
        )}
        {this.state.showQuestion && (
          <Question
            onKeyPress={this.handleKeyPress}
            question={this.state.question}
            answer={this.state.answer}
            category={this.state.category}
            value={this.state.value}
            showAnswer={this.state.showAnswer}
          />
        )}
      </div>
    );
  }
}

export default App;
