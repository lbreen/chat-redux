import React from 'react';

const Message = ({ message: { author, content, created_at } }) => {
  const time = new Date(created_at).toLocaleTimeString();

  return (
    <div className="message">
      <p className="message-details">
        {author} - {time}
      </p>
      <p className="message-content">{content}</p>
    </div>
  );
};

export default Message;
