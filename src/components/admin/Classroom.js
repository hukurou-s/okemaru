import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Table from './Table';
import io from "socket.io-client";
import createStore from '../../stores';
import { updateClassroom } from '../../actions';

const store = createStore();

class Classroom extends React.Component {

    constructor() {
        super();
        this.socket = io.connect('localhost:8888');
        this.socket.on('changeState', (message) => {
            const table = message;
            store.dispatch(updateClassroom(table));
        });
    }

    render () {
        return (
            <Provider store={store}>
              <div className="container">
                <h1>{'Admin Page'}</h1>
                <div>
                  <table>
                    <Table />
                  </table>
                </div>
              </div>
            </Provider>
        );
    }
}

export default Classroom;
