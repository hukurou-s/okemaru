import React, { Component } from 'react';
import Table from './Table';
import io from "socket.io-client";

class Classroom extends React.Component {

    constructor() {
        super();
        this.state = {
            tables: ['G01','H01','G02','H02'],
            statuses: [false, false, false, false],
        };

        this.socket = io.connect('localhost:8888');
        this.socket.on('changeState', (message) => {
            let tables = this.state.tables;
            let index = this.state.tables.indexOf(message.table);
            var statuses = this.state.statuses;

            statuses[index] = message.status;
            this.setState({statuses: statuses});
        });
    }

    renderTable(table) {
        return <Table name={table.name} status={table.status} />;
    }

    render () {
        const tables = this.state.tables;
        const statuses = this.state.statuses;
        return (
                <div>
                <h1>{'Admin Page'}</h1>
                <div>
                <table>
                <tr>{this.renderTable({name: tables[0], status: statuses[0]})}</tr>
                <tr>{this.renderTable({name: tables[1], status: statuses[1]})}</tr>
                <tr>{this.renderTable({name: tables[2], status: statuses[2]})}</tr>
                <tr>{this.renderTable({name: tables[3], status: statuses[3]})}</tr>
                </table>
                </div>
                </div>
        );
    }
}

export default Classroom;
