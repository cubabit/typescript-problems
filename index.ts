///<reference path='typings/socket.io/socket.io.d.ts'/>

import SocketIO = require('socket.io');

const io = SocketIO().attach(8080);