import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Dropdown, ButtonGroup } from 'react-bootstrap';

import SimpleButton from './Button';

import { actions } from '../../slices';

const DropdownButton = (props) => {
  const { item } = props;
  const { currentChannelId } = useSelector((state) => state.channelsInfo);
  const isActive = item.id === currentChannelId;

  const dispatch = useDispatch();
  const openModal = (payload) => () => dispatch(actions.openModal(payload));

  return (
    <Dropdown as={ButtonGroup} className="d-flex">
      <SimpleButton item={item} />
      <Dropdown.Toggle
        split
        variant={isActive ? 'primary' : 'light'}
      />

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={openModal({ type: 'rename', item })}
        >
          Rename
        </Dropdown.Item>

        <Dropdown.Item
          onClick={openModal({ type: 'delete', item })}
        >
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownButton;
