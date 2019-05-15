import React, { Component } from 'react';

class Table extends React.Component {

    render() {
        let tableName = this.props.name;
        let state = this.props.state;
        return (
                <h3>
                {tableName}, {state}
            </h3>
        );
    }
}

export default Table;
