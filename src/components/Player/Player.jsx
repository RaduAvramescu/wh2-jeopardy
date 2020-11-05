import React, { Component } from "react";

export default class Player extends Component {
  onIncrement = () => {
    const { player, onModifyScore } = this.props;
    onModifyScore(player, 100);
  };

  onDecrement = () => {
    const { player, onModifyScore } = this.props;
    onModifyScore(player, -100);
  };

  getBadgeClasses = () => {
    const {
      player: { value },
    } = this.props;
    if (value < 0) return "badge m-2 badge-danger";
    if (value === 0) return "badge m-2 badge-warning";
    return "badge m-2 badge-primary";
  };

  render() {
    const {
      player: { name, value },
    } = this.props;
    return (
      <div className="table-dark border fade-in visible">
        <div className="m-2 ml-3 mr-3">
          <span>{name}</span>
          <span className={this.getBadgeClasses()}>{value}</span>
          <button
            onClick={this.onIncrement}
            className="btn btn-primary btn-lg m-1"
          >
            +
          </button>
          <button onClick={this.onDecrement} className="btn btn-danger btn-lg">
            -
          </button>
        </div>
      </div>
    );
  }
}
