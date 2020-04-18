import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person: []
    };
  }

  componentDidMount() {
    axios.get('/api/person')
      .then(res => {
        this.setState({ person: res.data });
        console.log(this.state.person);
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Person List
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Person</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Second Name</th>
                  <th>Gender</th>
                  <th>Age</th>
                  <th>Job</th>
                </tr>
              </thead>
              <tbody>
                {this.state.person.map(person =>
                  <tr>
                    <td><Link to={`/show/${person._id}`}>{person.first_name}</Link></td>
                    <td>{person.second_name}</td>
                    <td>{person.gender}</td>
                    <td>{person.age}</td>
                    <td>{person.job}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
