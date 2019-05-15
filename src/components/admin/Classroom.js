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
                <h1>{"Admin Page"}</h1>
                {this.rederTable("H01", "OK")}
            {this.rederTable("G01", "NG")}
            {this.rederTable("H02", "NG")}
            {this.rederTable("H02", "OK")}
                </div>
        );
    }
}

export default Classroom;
