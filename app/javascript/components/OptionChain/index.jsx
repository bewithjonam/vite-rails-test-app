import React from 'react';
import OptionChainView from './OptionChainView';

const OptionChain = (props) => {
  return (
    <div>
      <h1>Option Chain comes below</h1>
      <OptionChainView {...props} />
    </div>
  );
};

export default OptionChain