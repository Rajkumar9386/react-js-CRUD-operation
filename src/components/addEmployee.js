import React, { Component } from "react";

export class AddEmployee extends Component {
    constructor(props){
        super(props);
        this.initialState = {
            id: '',
            name: '',
            salary: '',
            age: '',
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.onSubmitForm(this.state)
        this.setState(this.initialState);
        console.log("this.state",this.state);
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 title-btn-wrapper">
                            <h1>Add Employee</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" value={this.state.name} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="salary">Salary:</label>
                                    <input type="text" className="form-control" id="salary" placeholder="Enter Salary" name="salary" value={this.state.salary} onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="age">Age:</label>
                                    <input type="number" className="form-control" id="age" placeholder="Enter Age" name="age" onChange={this.handleChange}/>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}