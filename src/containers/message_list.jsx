import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions/index';

import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {
  componentWillMount() {
    this.props.setMessages();
  }

  render() {
    const { messages } = this.props;

    if (messages === []) {
      return (
        <div className="messages-container">
          <div className="messages-list">
            {messages.map(message => <Message message={message} key={message.createdAt} />)}
          </div>
          <MessageForm />
        </div>

      );
    }

    return (
      <div className="messages-container">
        <div className="messages-list">
          <p className="no-messages">No messages yet!</p>
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages },
    dispatch
  );
}


function mapStateToProps(state) {
  // Map the Redux state to the MessageList props
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
