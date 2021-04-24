import React,  { Component } from "react";
import API from "../utils/API";
import Query from "../components/searchform";
import "../style/table.css";

class companyemployeeTable extends Component {
  state = {
    results: [],
    error: "" ,
    filter:[],
    sorted: false,
    query: "",
  };

  componentDidMount() {
      API.employeeData()
      .then(
          (apiresults) => {
              this.setState({
                  results: apiresults.data.results
              });
          },
          (error) => {
              this.setState({
                  error
              });
          }
      )
  }
  catalog = () => {
    var searchResults ;
        if (this.state.sorted == false){
        searchResults = this.state.results.sort
        (function (a,b) {
            if (a.name.last > b.name.last) {
                return -1;
            }
            if (a.name.last > b.name.last) {
                return 1;
            }
            return 0;
        });
    } else {
        searchResults = this.state.results.reverse((a, b) => {
            if (a.name.last < b.name.last) return 1;
            if (a.name.last < b.name.last) return -1;
            return 0;
        });
    }
    this.setState({
        results: searchResults,
        sorted: !this.state.sorted,
    })
}

filter = (e) => {
    var userInput = e.target.value;
    let sortedResults = this.state.results.filter(employee => employee.name.first.includes(userInput)  || employee.name.last.includes(userInput) || employee.location.country.includes(userInput))
    this.setState({
        query: userInput,
        filter: sortedResults,
    })
}

render () {
    return (
        <div classname="container">
            <Query filter={this.filter} />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"> First Name </th>
                        <th scope="col" onClick={this.sort}> Last Name </th>
                        <th scope="col"> City </th>
                        <th scope="col"> County </th>
                        <th scope="col"> Email </th>
                        <th scope="col"> Phone Number </th>
                        <th scope="col"> Cell Number </th>
                      </tr>
                  </thead>
        <tbody>
          {
          this.state.filter.length > 0 ? this.state.filter.map((results) => (
              <tr>
                <td>{results.name.first}</td>
                <td>{results.name.last}</td>
                <td>{results.location.city}</td>
                <td>{results.location.country}</td>
                <td>{results.email}</td>
                <td>{results.phone}</td>
                <td>{results.cell}</td>
              </tr>
            )) :
          this.state.results.length > 0 &&
            this.state.results.map((results) => (
              <tr>
                <td>{results.name.first}</td>
                <td>{results.name.last}</td>
                <td>{results.location.city}</td>
                <td>{results.location.country}</td>
                <td>{results.email}</td>
                <td>{results.phone}</td>
                <td>{results.cell}</td>
              </tr>
            ))}
        </tbody>
      </table>
        </div>
    );
}
}

export default companyemployeeTable