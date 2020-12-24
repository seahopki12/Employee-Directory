/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class EmployeeDirectory extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Employee Directory</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Filter By
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
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