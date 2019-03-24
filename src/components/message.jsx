import React from 'react';

const Message = ({ message: { author, content, createdAt } }) => {
  const time = new Date(createdAt).toLocaleTimeString();

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
