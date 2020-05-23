import React, { Component } from "react";

class AddPlayerFrom extends Component {
  playerInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddPlayer(this.playerInput.current.value);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref={this.playerInput}
          placeholder="Enter a player's name"
        />
        <input type="submit" value="Add Player" />
      </form>
    );
  }
}

export default AddPlayerFrom;
