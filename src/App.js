import React, { Component } from "react";

import "./App.css";

import categoriesData from "./data/categoriesData.json";
import questionsData from "./data/questionsData.json";

import { PlayerNameForm, Players, Question, RowContainer } from "./components";

class App extends Component {
  state = {
    categories: categoriesData,
    questions: questionsData,
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

  handleKeyPress = (event) => {
    if (event.key === " " && this.state.showQuestion) {
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
    console.log(this.state.categories);
    const newPlayers = players.map((player) => ({
      ...player,
      key: player.id,
      id: player.id,
      name: player.name,
      value: 0,
    }));
    this.setState({ players: newPlayers });
    this.handleHide("showPlayerForm");
    this.handleHide("showPlayers");
    this.handleHide("showTable");
  };

  handleModifyScore = (player, value) => {
    const newPlayers = this.state.players.map((p) =>
      p !== player
        ? p
        : {
            ...p,
            value: player.value + value,
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
            onModifyScore={this.handleModifyScore}
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
            question={this.state.question}
            answer={this.state.answer}
            category={this.state.category}
            value={this.state.value}
            showAnswer={this.state.showAnswer}
            onKeyPress={this.handleKeyPress}
          />
        )}
      </div>
    );
  }
}

export default App;
