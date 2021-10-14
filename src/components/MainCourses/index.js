import React, { Component } from 'react';
import './index.css';


function CoursePreview(props){
    return (
        <div className="course-preview">
            <h2>{props.name}</h2>
            <p>{props.studentsCount} учеников</p>
        </div>
    );
}

class MainCourses extends Component {
    renderCourses(){
        const courses = [];
        for(const course of this.props.courses){
            courses.push(
                <div className="col-4">
                    <CoursePreview 
                        name={course.name} 
                        studentsCount={course.studentsCount} />
                </div>
            );
        }

        return courses;
    }

    render(){
        return (
            <div className="main-courses">
                <div className="container">
                    <h1>Мои курсы</h1>
                    <div className="main-courses-list container">
                        <div className="row">
                            {this.renderCourses()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainCourses;