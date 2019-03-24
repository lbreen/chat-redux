import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ChannelList extends Component {
  renderChannel = (channel) => {
    return (
      <li
        key={channel}
        className="channel"
        role="presentation"
      >
        {channel}
      </li>
    );
  }

  render() {
    const { channels } = this.props;

    return (
      <ul className="channel-list">
        {channels.map(this.renderChannel)}
      </ul>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { },
//     dispatch
//   );
// }


function mapStateToProps(state) {
  // Map the Redux state to the MessageList props
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, null)(ChannelList);
