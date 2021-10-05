import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css';
import notificationIcon from './notifications-icon.png';
import manIcon from './man-icon.png';


class MainNav extends Component {
    getNavItems(){
        const res = [];

        for(const course of this.props.courses){
            res.push(<NavDropdown.Item href="#">{course.name}</NavDropdown.Item>);
        }

        return res;
    }
    render(){
        return (
            <div className="d-flex justify-content-between bg-light">
                <nav  className="main-navbar navbar navbar-expand-lg navbar-light">
                        <a  className="navbar-brand"  href="#">
                            <img className="logo" src={logo} />
                        </a>
                        <NavDropdown title="Мои курсы" id="basic-nav-dropdown">
                            {this.getNavItems()}
                        </NavDropdown>
                </nav>
                <div className="main-nav-right d-flex justify-content-between">
                    <a href="#" className="nav-item">
                        <img src={notificationIcon} />
                        Уведомления
                    </a>
                    <a href="#" className="nav-item">
                        <img src={manIcon} />
                        FirstName LastName
                    </a>
                    <a href="#" className="nav-item">
                        Выйти
                    </a>
                </div>
            </div>
        );
    }
}


export default MainNav;