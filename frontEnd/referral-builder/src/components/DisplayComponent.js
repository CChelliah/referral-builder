import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter, Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Button, Col, Row, Form, FormControl, FormGroup, Label, Input, Table} from 'reactstrap'

class Display extends Component {
  constructor (props) {
    super(props) 
    this.state = {
      users: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:5000')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
    this.state.users = JSON.stringify(this.state.users)
  }

  render () {
    console.log(this.state.users)
    return (
      <Table>
        <thead>
          <tr>
            <th>Given Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((i) => (
            <tr>
              <td>{i.givenName}</td>
              <td>{i.surname}</td>
              <td>{i.email}</td>
              <td>{i.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    )
  }
}

export default Display
