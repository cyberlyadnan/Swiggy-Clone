import React from 'react';

const isOpenHOC = (WrappedComponent) => {
  return (props) => (
    <div className="relative">
      <div className="absolute top-0 left-0 dark:bg-gray-800 text-white text-sm px-2 py-1 rounded-tr-lg rounded-bl-lg">
        Open
      </div>
      <WrappedComponent {...props} />
    </div>
  );
};

export default isOpenHOC;
