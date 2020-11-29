import React from 'react';
import cn from 'classnames';
import Nav from 'react-bootstrap/Nav';

const ChannelsNav = (props) => {
  const { current, channels } = props;

  return (
    <Nav variant="pills" as="ul" className="flex-column" fill>
      {channels.map(({ id, name }) => (
        <Nav.Item key={id} as="li">
          <Nav.Link as="button" className={cn('btn-block btn', { active: id === current })}>
            {name}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default ChannelsNav;
