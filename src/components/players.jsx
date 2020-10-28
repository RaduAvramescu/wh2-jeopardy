import React, { Component } from "react";
import Player from "./player";

export default class Players extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center fixed-bottom invisible text-responsive">
        {this.props.players.map((player) => (
          <Player
            key={player.id}
            id={player.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            player={player}
          />
        ))}
      </div>
    );
  }
}
