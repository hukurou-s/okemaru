import React, { Component } from 'react';

class Table extends React.Component {

    renderState(status) {
        if (status) {
            return (
                    <td style={{color: "#00ff00"}}>
                    {'OK'}
                </td>
            );
        }

        return (
                <td style={{color: "#ff0000"}}>
                {'NG'}
            </td>
        );
    }

    render() {
        let tableName = this.props.name;
        let status = this.props.status;

        return (
                <div>
                <td>
                {tableName}
            </td>
                {this.renderState(status)}
                </div>
        );
    }
}

export default Table;
