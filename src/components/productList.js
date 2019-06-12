import React, {Component} from 'react';
import { AddEmployee } from "../components/addEmployee";
import '../App.css';

export class ProductList extends Component{

    constructor(props){
        super(props);
        this.state = {
            error: null,
            products: []
        }
    }
    componentDidMount() {
        const apiUrl = 'http://dummy.restapiexample.com/api/v1/employees';

        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        products: result
                    })
                },
                (error) => {
                    this.setState({error})
                }
            )

    }
    render() {
        const {error, products} = this.state;

        if(error){
            return(
                <div>Error: {error.message}</div>
            );
        }else{
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 title-btn-wrapper">
                                <h1>Employee List</h1>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <table className="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Salary</th>
                                        <th>Age</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {products.map(products => (
                                        <tr key={products.id}>
                                            <td>{products.id}</td>
                                            <td>{products.employee_name}</td>
                                            <td>{products.employee_salary}</td>
                                            <td>{products.employee_age}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

// export default ProductList;
