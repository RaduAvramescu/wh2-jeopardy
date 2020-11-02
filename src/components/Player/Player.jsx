import React, { Component } from "react";

export default class Player extends Component {
  onIncrement = () => {
    this.props.onModifyScore(this.props.player, 100);
  };

  onDecrement = () => {
    this.props.onModifyScore(this.props.player, -100);
  };

  getBadgeClasses = () => {
    const classes = "badge m-2 badge-";
    if (this.props.player.value < 0) return classes + "danger";
    if (this.props.player.value === 0) return classes + "warning";
    return classes + "primary";
  };

  render() {
    return (
      <div className="table-dark border fade-in visible">
        <div className="m-2 ml-3 mr-3">
          <span>{this.props.player.name}</span>
          <span className={this.getBadgeClasses()}>
            {this.props.player.value}
          </span>
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
