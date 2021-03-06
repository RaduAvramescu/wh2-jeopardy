import React, { Component } from "react";

export default class PlayerNameForm extends Component {
  player1 = React.createRef();
  player2 = React.createRef();

  onSubmit = (event) => {
    const { onSubmit } = this.props;
    const players = [
      { id: 1, name: this.player1.current.value },
      { id: 2, name: this.player2.current.value },
    ];
    onSubmit(players);
    event.preventDefault();
  };

  render() {
    return (
      <div className="fade-in d-flex align-items-center min-vh-100 text-responsive">
        <div className="container">
          <form onSubmit={this.onSubmit}>
            <div className="form-row justify-content-center">
              <div className="form-group form-group-lg col-md-3 m-2 ">
                <label htmlFor="player1">Player 1</label>
                <input
                  id="player1"
                  type="text"
                  ref={this.player1}
                  className="form-control input-lg"
                  required
                  placeholder="Name"
                />
              </div>
              <div className="form-group col-md-3 m-2">
                <label htmlFor="player2">Player 2</label>
                <input
                  id="player2"
                  type="text"
                  ref={this.player2}
                  className="form-control input-lg"
                  required
                  placeholder="Name"
                />
              </div>
              <div className="form-group col-md-12 m-2 text-center">
                <button type="submit" className="btn btn-dark btn-lg m-2">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
