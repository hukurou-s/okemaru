import React, { Component } from 'react';
import Table from './Table';

class Classroom extends React.Component {
    rederTable(name, state) {
        return <Table name={name} state={state} />;
    }

    render () {
        return (
                <div>
                {this.rederTable("H01", "OK")}
            {this.rederTable("G01", "NG")}
            {this.rederTable("H02", "NG")}
            {this.rederTable("H02", "OK")}
                </div>
        );
    }
}

export default Classroom;
