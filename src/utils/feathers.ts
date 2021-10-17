import { browser } from '$app/env';
import feathers from '@feathersjs/client';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';


const client = feathers();

if (browser) {
  const socket = io('http://localhost:3030', {
    transports: ['websocket'],
    forceNew: true
  });
  client.configure(socketio(socket));
  client.configure(
    feathers.authentication({
      storage: window.localStorage,
    })
  );
  console.log('configuring feathers...');
}

export default client;