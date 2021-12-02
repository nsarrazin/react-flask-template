import React, {useEffect, useState} from 'react';

import { SocketContext, socket } from './context/socket';

import './App.css';
function Client() {
  const [value, setValue] = useState(0);

  useEffect(() => { socket.on("message", (data: number) => { setValue(data) }) }, []);

  return (<p> Number of connections : {value}</p>)

}

function App() {
  return (
    <div className="App">
      <SocketContext.Provider value={socket}>
        <Client/>
      </SocketContext.Provider>

    </div>
  );
}

export default App;