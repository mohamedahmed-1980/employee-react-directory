import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getEmployeeList()
      .then(res => this.setState({ employees: res.data.results, results:  res.data.results}))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
    let filteredResults = this.state.employees.filter(x=>x.name.first == event.target.value);
    this.setState({results: filteredResults});
  };

  sortByFirstName = () => {
    let filteredResults = this.state.results.sort(function(a, b){
        var x = a.name.first.toLowerCase();
        var y = b.name.first.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;});
    this.setState({results: filteredResults});
  }

 
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <SearchForm
            handleInputChange={this.handleInputChange}
          />
          <SearchResults results={this.state.results} sortByFirstName={this.sortByFirstName}/>
        </Container>
      </div>
    );
  }
}

export default Search;
