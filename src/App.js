import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainNav from './components/MainNav';
import MainCourses from './components/MainCourses';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      courses: []
    };
  }

  updateCourses(token){
    fetch('http://jsonplaceholder.typicode.com/users', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Token ${token}` 
      }
    })
    .then(resp => resp.json())
    .then(resp => this.setState({courses: resp}))
    .catch(error => console.log(error));
  }

  componentDidMount(){
    this.updateCourses();
  }

  render(){
    return (
      <BrowserRouter>
          <MainNav courses={this.state.courses} />
          <MainCourses courses={this.state.courses} />
      </BrowserRouter>
    );
  }
}

export default App;