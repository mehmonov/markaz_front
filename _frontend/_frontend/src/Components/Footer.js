import React from 'react';

function Footer(props) {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <nav className="pull-left">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.themekita.com">
                                
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="copyright ml-auto">
                    {new Date().getFullYear()}, made with by <a href="">Vali-Teach</a> IT Group
                </div>
            </div>
        </footer>
    )
}

export default Footer;