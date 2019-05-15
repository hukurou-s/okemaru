import React, { component } from 'react';

class StatusButton extends React.Component {

    constructor() {
        super();
        this.state = {isOK: false};

        this.handleClick = this.handleClick.bind(this);
    }

	  handleClick() {
		    this.setState(function(prevState) {
			      return {isOK: !prevState.isOK};
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
