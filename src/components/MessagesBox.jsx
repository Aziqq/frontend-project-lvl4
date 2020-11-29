import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

const MapStateToProps = ({ messages }) => ({ messages });

const MessagesBox = (props) => {
  const { messages } = props;
  const messageBox = useRef();

  useEffect(() => {
    messageBox.current.scrollTop = messageBox.current.scrollHeight;
  });

  return (
    <div ref={messageBox} className="chat-messages overflow-auto mb-3">
      {messages && messages.map(
        ({ id, nickname, body }) => (
          <div key={id}>
            <b>{nickname}</b>
            :&nbsp;
            {body}
          </div>
        ),
      )}
    </div>
  );
};

export default connect(MapStateToProps)(MessagesBox);
