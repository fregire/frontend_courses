import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css';
import notificationIcon from './notifications-icon.png';
import manIcon from './man-icon.png';


class MainNav extends Component {
    renderNavItems(){
        return this.props.courses
            .map(course => <NavDropdown.Item href="#">{course.name}</NavDropdown.Item>);
    }

    renderRightNav(){
        return (
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
        );
    }
    render(){
        return (
            <div className="d-flex justify-content-between bg-light">
                <nav  className="main-navbar navbar navbar-expand-lg navbar-light">
                        <a  className="navbar-brand"  href="#">
                            <img className="logo" src={logo} />
                        </a>
                        <NavDropdown title="Мои курсы" id="basic-nav-dropdown">
                            {this.renderNavItems()}
                        </NavDropdown>
                </nav>
                {this.renderRightNav()}
            </div>
        );
    }
}


export default MainNav;