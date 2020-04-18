import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      person: {}
    };
  }

  componentDidMount() {
    axios.get('/api/person/'+this.props.match.params.id)
      .then(res => {
        this.setState({ person: res.data });
        console.log(this.state.person);
      });
  }

  onChange = (e) => {
    const state = this.state.person
    state[e.target.name] = e.target.value;
    this.setState({person:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { first_name, second_name, gender, description, age, job } = this.state.person;

    axios.put('/api/person/'+this.props.match.params.id, { first_name, second_name, gender, description, age, job })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT PERSON
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.person._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> List of People</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="first_name">First Name:</label>
                <input type="text" class="form-control" name="first_name" value={this.state.person.first_name} onChange={this.onChange} placeholder="First Name" />
              </div>
              <div class="form-group">
                <label for="second_name">Second Name:</label>
                <input type="text" class="form-control" name="second_name" value={this.state.person.second_name} onChange={this.onChange} placeholder="Second Name" />
              </div>
              <div class="form-group">
                <label for="gender">Gender:</label>
                <input type="text" class="form-control" name="gender" value={this.state.person.gender} onChange={this.onChange} placeholder="Gender" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="description" value={this.state.person.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label for="published_date">Age:</label>
                <input type="number" class="form-control" name="age" value={this.state.person.age} onChange={this.onChange} placeholder="Published Year" />
              </div>
              <div class="form-group">
                <label for="job">Job:</label>
                <input type="text" class="form-control" name="job" value={this.state.person.job} onChange={this.onChange} placeholder="Job" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
