import { combineReducers } from 'redux';

import channelsInfo, { actions as channelsActions } from './channelsSlice';
import messagesInfo, { actions as messagesActions } from './messagesSlice';
import modalInfo, { actions as modalActions } from './modalSlice';
import sidebarInfo, { actions as sidebarActions } from './sidebarSlice';

export default combineReducers({
  messagesInfo,
  channelsInfo,
  modalInfo,
  sidebarInfo,
});

const actions = {
  ...channelsActions,
  ...messagesActions,
  ...modalActions,
  ...sidebarActions,
};

export { actions };
