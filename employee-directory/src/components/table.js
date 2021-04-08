import React,  { Component } from "react";
import API from "../utils/API";
import Query from "./searchform"

class companyemployeeTable extends Component {
  state = {
    results: [],
    error: "" ,
    filter:[],
    sorted: false,
    query: "",
  };

  componentDidMount() {
      API.getEmployeeData()
      .then(
          (apiresults) => {
              this.setState({
                  apiresults: apiresults.data.results
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
        searchResults = this.state.results.sort(function (a,b) {
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


}

export default companyemployeeTable