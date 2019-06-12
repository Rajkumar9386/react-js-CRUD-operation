import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { ProductList } from './components/productList';
import { AddEmployee } from './components/addEmployee';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      isAddemployee: false,
      error: null,
      response: {}
    }
    this.onCreate = this.onCreate.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  onCreate(){
    this.setState({isAddemployee: true});
  }
  onSubmitForm(data){
    const apiUrl = "http://dummy.restapiexample.com/api/v1/create";

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      myHeaders
    };

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            response: result, 
            isAddemployee: false
          })
        },
        (error) => {
          this.setState({error});
        }
      )
  }

  render() {
      return (
        <div className="App">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12 title-btn-wrapper">
                    {!this.state.isAddemployee && <button type="button" className="btn btn-success" onClick={() => this.onCreate()}>Add Employee</button> }
                    {!this.state.isAddemployee && <ProductList /> }
                    {this.state.isAddemployee && <AddEmployee onSubmitForm={this.onSubmitForm}/> }
                    {this.state.error && <div>Error: {this.state.error.message}</div>}
                  </div>
              </div>
          </div>
        </div>
      );
  }
}

export default App;
