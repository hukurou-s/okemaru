import React, { Component } from 'react';

class Table extends React.Component {

    renderState(state) {
        if (state == 'OK') {
            return (
                    <td style={{color: "#00ff00"}}>
                    {state}
                </td>
            );
        }
        return (
                <td style={{color: "#ff0000"}}>
                {state}
            </td>
        );
    }

    render() {
        let tableName = this.props.name;
        let state = this.props.state;
        return (
                <div>
                <td>
                {tableName}
            </td>
                {this.renderState(state)}
                </div>
        );
    }
}

export default Table;
