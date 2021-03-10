import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <table className="table table-striped table-bordered">
  <thead>
    <tr key='Id'>
          <td>Photo</td>
          <td>First Name  <button className='btn btn-outline-info ml-5' onClick={props.sortByFirstName} >SORT</button></td>
          <td>Last Name</td>
          <td>Title</td>
          <td>Age</td>
        
    </tr>
  </thead>
  <tbody>
  {props.results.map(result => (
    
        <tr key={result.cell}>
          <td><img src = {result.picture.medium} /> </td>
          <td>{result.name.first} </td>
          <td>{result.name.last}</td>
          <td>{result.name.title}</td>
          <td>{result.dob.age}</td>
        </tr>
        
      ))}
  </tbody>
</table>
    // <ul className="list-group search-results">
    //   {props.results.map(result => (
    //     <li key={result} className="list-group-item">
    //       <img alt="Dog" src={result} className="img-fluid" />
    //     </li>
    //   ))}
    // </ul>
  );
}

export default SearchResults;
