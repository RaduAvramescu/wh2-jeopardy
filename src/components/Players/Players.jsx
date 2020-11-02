import React, { Component } from "react";
import Player from "../Player/Player";

export default class Players extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center fixed-bottom invisible text-responsive">
        {this.props.players.map((player) => (
          <Player
            key={player.id}
            id={player.id}
            player={player}
            onModifyScore={this.props.onModifyScore}
          />
        ))}
      </div>
    );
  }
}
