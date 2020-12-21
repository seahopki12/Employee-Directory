import React, { Component } from "react";

class EmployeeDirectory extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">Employee 1</div>
                        <div className="row">Employee 2</div>
                        <div className="row">Employee 3</div>
                        <div className="row">Employee 4</div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">Data 1</div>
                        <div className="row">Data 2</div>
                        <div className="row">Data 3</div>
                        <div className="row">Data 4</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeeDirectory;