import React from 'react';
import { Link } from 'react-router-dom';

function LogoHeader(props) {
    return (
        <div className="logo-header" data-background-color="blue">
            <Link to="/" className="logo">
                <img src="./assets/img/logo/logo.svg" alt="navbar brand" className="navbar-brand" />
            </Link>
            <button className="navbar-toggler sidenav-toggler ml-auto" type="button"
                data-toggle="collapse" data-target="collapse" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <i className="icon-menu"></i>
                </span>
            </button>
            <div className="nav-toggle">
                <button className="btn btn-toggle toggle-sidebar">
                    <i className="icon-menu"></i>
                </button>
            </div>
        </div>
    );
}

export default LogoHeader;