import React from 'react';
import cn from 'classnames';

const App = ({ data }) => {
  const renderChannels = () => {
    const { channels, currentChannelId } = data;

    return (
      <div className="col-3 border-right">
        <div className="d-flex mb-2">
          <span>Channels</span>
          <button type="button" className="ml-auto p-0 btn btn-link">+</button>
        </div>
        <ul className="nav flex-column nav-pills nav-fill">
          {channels.map(({ id, name }) => (
            <li key={id} className="nav-item">
              <button
                type="button"
                className={cn(
                  'nav-link', 'btn-block', 'mb-2', 'text-left', 'btn',
                  currentChannelId === id ? 'btn-primary' : 'btn-light',
                )}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="row h-100 pb-3">
      {renderChannels()}
    </div>
  );
};

export default App;
