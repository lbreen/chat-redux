import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions/index';

import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 3000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    const { messages, selectedChannel } = this.props;

    if (messages !== []) {
      return (
        <div className="messages-container">
          <div className="channel-title">
            <h2>{selectedChannel}</h2>
          </div>
          <div className="messages-list" ref={(list) => { this.list = list; }}>
            {messages.map(message => <Message message={message} key={message.created_at} />)}
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
    { fetchMessages },
    dispatch
  );
}


function mapStateToProps(state) {
  // Map the Redux state to the MessageList props
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
