import React, { component } from 'react';
import io from "socket.io-client";

class StatusButton extends React.Component {

    constructor() {
        super();
        this.state = {table: "G01", isOK: false};

        this.handleClick = this.handleClick.bind(this);
        this.socket = io.connect('localhost:8888');
    }

    send(status){
        this.socket.emit('changeState',{
            table: this.state.table,
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

    render() {
        return (
                <button onClick={this.handleClick}>
                {this.state.isOK ? 'NG' : 'OK'}
            </button>
        );
    }
}

export default StatusButton;
