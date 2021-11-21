import React from 'react';
import PropTypes from 'prop-types';

export default function Messages({ messages }) {
  return (
    <>
      <h2>Messages</h2>
      {messages.map((message, i) =>        
        <p key={i} className={message.premium ? 'is-premium' : ''}>
          <strong>{message.sender}</strong> (<small>{message.time}</small>):<br/>
          {message.text}          
        </p>
      )}
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array
};
