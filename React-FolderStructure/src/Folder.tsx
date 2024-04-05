import React, { Children, Fragment, useState } from 'react';
import Icon from './Icon';

const Folder = ({ files }) => {
  const [expanded, setExpanded] = useState({});

  const handleClick = (key) => {
    setExpanded({
      ...expanded,
      [key]: !expanded[key],
    });
  };

  const handleFiles = (data) => {
    return data.map((item, index) => {
      const hasChildren = item['isFolder'] === true;
      return (
        <div key={index}>
          <span>
            {hasChildren && (
              <Icon
                name={expanded[item.name] ? 'caretDown' : 'caretRight'}
                onClick={() => handleClick(item.name)}
                style={{ width: '15px' }}
              />
            )}
            <span>
              <Icon name={item.name.split('.')[1]} style={{ width: '15px' }} />
              {item.name}
            </span>
          </span>
          {hasChildren && expanded[item.name] && item.children && (
            <div style={{ marginLeft: '20px' }}>
              {handleFiles(item.children)}
            </div>
          )}
        </div>
      );
    });
  };

  return <div>{handleFiles([files])}</div>;
};

export default Folder;
