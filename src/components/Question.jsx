import React, { Component } from "react";

export default class Question extends Component {
  render() {
    return (
      <div>
        <div>
          <nav class="navbar navbar-dark bg-dark justify-content-around">
            <span class="navbar-brand">
              Continue <kbd className="text-dark bg-light">SPACE</kbd>
            </span>
            <span className="navbar-brand">
              {this.props.category} for {this.props.value}
            </span>
          </nav>
        </div>
        <div
          style={{ height: "90vh" }}
          className="container-fluid text-responsive fade-in"
        >
          <div className="col-12 fade-in text-center mb-5 mt-5 pt-5">
            {this.props.question}
          </div>
          {this.props.showAnswer && (
            <div className="col-12 fade-in text-center mb-5 mt-5 pt-5">
              {this.props.answer}
            </div>
          )}
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener("keydown", this.props.onKeyPress, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.props.onKeyPress, false);
  }
}
