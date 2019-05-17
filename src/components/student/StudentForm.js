import React, { Component } from 'react';

class StudentForm extends React.Component {

    constructor() {
        super();
        this.state = {
            table: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        console.log("state", this.state.table);
        this.props.setTableName(this.state.table);
    }

    handleChange(event) {
        this.setState({table: event.target.value});
    }

    render() {
        return(
            <form action="javascript:void(0)" onSubmit={this.handleSubmit}>

              <div>
                <label>
                  <input
                    type="radio"
                    name="tableName"
                    value="G01"
                    checked={this.state.table === "G01"}
                    onChange={this.handleChange}
                  />
                  G01
                </label>
              </div>

              <div>
                <label>
                  <input
                    type="radio"
                    name="tableName"
                    value="H01"
                    checked={this.state.table === "H01"}
                    onChange={this.handleChange}
                  />
                  H01
                </label>
              </div>

              <div>
                <label>
                  <input
                    type="radio"
                    name="tableName"
                    value="G02"
                    checked={this.state.table === "G02"}
                    onChange={this.handleChange}
                  />
                  G02
                </label>
              </div>

              <div>
                <label>
                  <input
                    type="radio"
                    name="tableName"
                    value="H02"
                    checked={this.state.table === "H02"}
                    onChange={this.handleChange}
                  />
                  H02
                </label>
              </div>

              <div>
                <button type="submit">
                  Save
                </button>
              </div>

            </form>
        );
    };
}

export default StudentForm;
