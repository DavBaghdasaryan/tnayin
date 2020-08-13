import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



class PersonList extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div>
        {this.state.persons.map(person => {
          return <div key={person.id}>
           <Link to={`/user/${person.id}`}> {person.name}</Link>
          </div>
        })}
      </div>
    )
  }
}


export default PersonList