import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      first_name: '',
      second_name: '',
      gender: '',
      description: '',
      age: '',
      job: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { first_name, second_name, gender, description, age, job } = this.state;

    axios.post('/api/person', { first_name, second_name, gender, description, age, job })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { first_name, second_name, gender, description, age, job } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD PEOPLE
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> List of person</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="first_name">First Name:</label>
                <input type="text" class="form-control" name="first_name" value={first_name} onChange={this.onChange} placeholder="First Name" />
              </div>
              <div class="form-group">
                <label for="second_name">Second Name:</label>
                <input type="text" class="form-control" name="second_name" value={second_name} onChange={this.onChange} placeholder="Second Name" />
              </div>
              <div class="form-group">
                <label for="gender">Gender:</label>
                <input type="text" class="form-control" name="gender" value={gender} onChange={this.onChange} placeholder="Gender" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <textArea class="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
              </div>
              <div class="form-group">
                <label for="published_date">Age:</label>
                <input type="number" class="form-control" name="age" value={age} onChange={this.onChange} placeholder="Age" />
              </div>
              <div class="form-group">
                <label for="job">Job:</label>
                <input type="text" class="form-control" name="job" value={job} onChange={this.onChange} placeholder="Job" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
