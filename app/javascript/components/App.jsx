import React from 'react';
import './App.style.scss';

import OptionChain from './OptionChain'

const App = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/v1/articles')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [])
  return (
    <div>
      Articles
      {data.map(({title}) => <div>{title}</div>)}

      <br/>
      <br/>
      <OptionChain />
    </div>
  );
};

export default App;
