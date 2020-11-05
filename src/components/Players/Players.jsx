import React from "react";

import Player from "../Player/Player";

const Players = ({ players, onModifyScore }) => {
  return (
    <div className="d-flex justify-content-center fixed-bottom invisible text-responsive">
      {players.map((player) => (
        <Player
          key={player.id}
          id={player.id}
          player={player}
          onModifyScore={onModifyScore}
        />
      ))}
    </div>
  );
};

export default Players;
