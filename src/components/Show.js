import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/api/person/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.person.first_name}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> List of people</Link></h4>
            <dl>
              <dt>Name:</dt>
              <dd>{this.state.person.first_name}</dd>
              <dt>Gender:</dt>
              <dd>{this.state.person.gender}</dd>
              <dt>Description:</dt>
              <dd>{this.state.person.description}</dd>
              <dt>Age:</dt>
              <dd>{this.state.person.age}</dd>
              <dt>Job:</dt>
              <dd>{this.state.person.job}</dd>
            </dl>
            <Link to={`/edit/${this.state.person._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.person._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
