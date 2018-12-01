import React, { Component } from 'react';
import './App.css';
import ReactTable from "react-table";
import 'react-table/react-table.css'

class App extends Component {
  render() {
    const data = [{
      name: 'Tanner Linsley',
      age: 26,
      friend: {
        name: 'Jason Maurer',
        age: 23,
      }
    }]

    const columns = [{
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    }, {
      Header: 'Age',
      accessor: 'age',
      Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      id: 'friendName', // Required because our accessor is not a string
      Header: 'Friend Name',
      accessor: 'friend.name' // Custom value accessors!
    }, {
      Header: props => <span>Friend Age</span>, // Custom header components!
      accessor: 'friend.age'
    }]


    return (
      <div class="container">
      <ReactTable
      data={data}
      columns={columns}
      showPagination={true}
      showPaginationTop={true}
      defaultPageSize={5}
      />
      </div>
    );
  }
}

export default App;
