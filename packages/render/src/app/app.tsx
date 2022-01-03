import React from 'react';
import TimerView from './pages/TimerView';
import timer from './mobx/timer'

function App() {
  return (
    <div className="App">
      <TimerView timer={timer} />
    </div>
  );
}

export default App;
