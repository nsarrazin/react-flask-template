import socketio from "socket.io-client";
import React from 'react';

function getBaseUrl() {
    var re = new RegExp(/\/\/(.*?)\//);
    return re.exec(window.location.href)![1];
}

let SOCKET_URL = "";

if (process.env.NODE_ENV === 'production' ){
    SOCKET_URL = "ws://" + getBaseUrl();
}
else{
    SOCKET_URL = "ws://localhost:5000/";
}

console.log(SOCKET_URL);
export const socket = socketio(SOCKET_URL);
export const SocketContext = React.createContext(socket);