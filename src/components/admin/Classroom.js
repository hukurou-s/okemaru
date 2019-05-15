import React, { Component } from 'react';
import Table from './Table';

class Classroom extends React.Component {

    constructor() {
        super();
    }

    rederTable(name, state) {
        return <Table name={name} state={state} />;
    }

    render () {
        return (
                <div>
                <h1>{'Admin Page'}</h1>
                <div>
                <table>
                <tr>{this.rederTable('H01', 'OK')}</tr>
                <tr>{this.rederTable('G01', 'NG')}</tr>
                <tr>{this.rederTable('H02', 'NG')}</tr>
                <tr>{this.rederTable('H02', 'OK')}</tr>
                </table>
                </div>
                </div>
        );
    }
}

export default Classroom;
