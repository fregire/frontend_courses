import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainNav from './components/MainNav';
import MainCourses from './components/MainCourses';
import api from './api/CoursesApi';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      courses: []
    };
  }

  updateCourses(token){
    api.getCourses(token).then(res => {
      this.setState({courses: res});
    });
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