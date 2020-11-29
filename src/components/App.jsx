import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import MessagesBox from './MessagesBox';
import SendMessageForm from './SendMessageForm';
import ChannelsNav from './ChannelsNav';

const App = ({ initState }) => {
  const { channels, currentChannelId } = initState;

  return (
    <Row className="h-100 pb-3">
      <Col xs={3} className="border-right">
        <div className="d-flex mb-2">
          <span>Channels</span>
          <div className="btn btn-link p-0 ml-auto">+</div>
        </div>
        <ChannelsNav channels={channels} current={currentChannelId} />
      </Col>
      <Col className="h-100">
        <div className="d-flex flex-column h-100">
          <MessagesBox />
          <div className="mt-auto">
            <SendMessageForm />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default App;
