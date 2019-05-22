import React, { component } from 'react';
import io from 'socket.io-client';
import StudentForm from './StudentForm';

class StatusButton extends React.Component {

    constructor() {
        super();
        this.state = {table: '', isOK: false};
        this.setTableName = this.setTableName.bind(this);

        this.handleClick = this.handleClick.bind(this);
        this.socket = io.connect('localhost:8888');
    }

    send(status){
        this.socket.emit('changeState',{
            name: this.state.table,
            status: status.isOK,
        });
    }

	  handleClick() {
		    this.setState(function(prevState) {
            let status = {isOK: !prevState.isOK};
            this.send(status);
			      return status;
		    });
	  }

    setTableName (tableName) {
        this.setState({table: tableName});
    }

    render() {
        console.log(this.state);
        if (this.state.table) {
            return (
                <button onClick={this.handleClick}>
                  {this.state.isOK ? 'NG' : 'OK'}
                </button>
            );
        }
        return (
            <StudentForm setTableName={this.setTableName} />
        );
    }
}

export default StatusButton;
