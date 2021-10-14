import React, { Component } from 'react';




const URL = 'http://jsonplaceholder.typicode.com/users';

class CoursesApi {
    async getCourses(token){
        return fetch(
            URL, 
            {
                'method':'GET',
                headers: {
                    'Content-Type':'application/json',
                    'Authorization':`Token ${token}` 
                }
            })
            .then(resp => resp.json());   
    }
}

const api = new CoursesApi();

export default api;