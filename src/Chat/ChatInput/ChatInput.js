import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor() {
    super();
    this.state = {
      userMessage: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      userMessage: event.target.value,
    });
  };

  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      this.props.sendMessage(this.state.userMessage);
      this.setState({
        userMessage: '',
      });
    }
  };

  render() {
    return (
      <footer className="ChatInput">
        <input
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          value={this.state.userMessage}
          type="text"
        />
        <button
          type="button"
          onClick={() => {
            this.props.sendMessage(this.state.userMessage);
            this.setState({
              userMessage: '',
            });
          }}
        >
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
