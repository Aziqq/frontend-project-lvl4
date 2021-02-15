import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const MessagesBox = () => {
  const messages = useSelector((state) => (
    state.messagesInfo.messages.filter((m) => m.channelId === state.channelsInfo.currentChannelId)
  ));

  const messageBox = useRef();
  useEffect(() => {
    messageBox.current.scrollTop = messageBox.current.scrollHeight;
  });

  return (
    <div className="overflow-auto mb-3" ref={messageBox}>
      {messages.map(({ id, nickname, body }) => (
        <div key={id}>
          <b>{nickname}</b>
          :&nbsp;
          {body}
        </div>
      ))}
    </div>
  );
};

export default MessagesBox;
