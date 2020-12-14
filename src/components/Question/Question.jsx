import React, { Component } from "react";

export default class Question extends Component {
  render() {
    const { category, value, question, showAnswer, answer } = this.props;
    return (
      <div>
        <div>
          <nav className="navbar navbar-dark bg-dark justify-content-around">
            <span className="navbar-brand">
              Continue <kbd className="text-dark bg-light">SPACE</kbd>
            </span>
            <span className="navbar-brand">
              {category} for {value}
            </span>
          </nav>
        </div>
        <div
          style={{ height: "90vh" }}
          className="container text-responsive fade-in"
        >
          <div className="fade-in text-center mb-5 mt-5 pt-5">{question}</div>
          {showAnswer && (
            <div className="fade-in text-center mb-5 mt-5 pt-5">{answer}</div>
          )}
        </div>
      </div>
    );
  }

  componentDidMount() {
    const { onKeyPress } = this.props;
    window.addEventListener("keydown", onKeyPress, false);
  }

  componentWillUnmount() {
    const { onKeyPress } = this.props;
    window.removeEventListener("keydown", onKeyPress, false);
  }
}
