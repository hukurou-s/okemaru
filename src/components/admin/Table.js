import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends React.Component {

    renderStatus(status) {
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
        const { classroom: tables } = this.props;
        var tablelist = [];
        _.each(tables, (t, i) => {
            tablelist.push(
                <tr key={i}>
                  <td>
                    {t.name}
                  </td>
                  {this.renderStatus(t.status)}
                </tr>
            );
        });

        return (
            <tbody>
              {tablelist}
            </tbody>
        );
    }
}

export default connect(state => state)(Table);
