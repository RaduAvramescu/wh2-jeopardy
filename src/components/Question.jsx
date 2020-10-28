import React, { Component } from "react";

export default class Question extends Component {
  render() {
    return (
      <div
        style={{ height: "90vh" }}
        className="container-fluid text-responsive table-dark fade-in"
      >
        <div className="col-12 fade-in text-center mb-5 mt-5 pt-5 testare1">
          {this.props.question}
        </div>
        {this.props.showAnswer && (
          <div className="col-12 fade-in text-center mb-5 mt-5 pt-5 testare2">
            {this.props.answer}
          </div>
        )}
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
