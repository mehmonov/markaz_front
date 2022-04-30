import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';
import { btnChange } from '../Redux/action';

function Sidebar(props) {
    const {currentActive} = useSelector(state=>state.Elements);
    const dispatch = useDispatch();
    const [link, setLink] = useState([
        { "id": 1, "link": "Yangi kelganlar", "href": "/", "icon": "far fa-calendar-plus" },
        { "id": 2, "link": "Qabul", "href": "/form", "icon": "fas fa-pen-square" },
        { "id": 3, "link": "Xodim qo'shish", "href": "/adduser", "icon": "fas fa-user-plus" },
        { "id": 4, "link": "Guruxlar", "href": "/groups", "icon": "fas fa-users" },
        { "id": 5, "link": "O'quvchilar", "href": "/pupils", "icon": "fas fa-user-graduate" }
    ])
    return (
        <div className="sidebar sidebar-style-2">
            <div className="sidebar-wrapper scrollbar scrollbar-inner">
                <div className="sidebar-content">
                    <div className="user">
                        <div className="avatar-sm float-left mr-2">
                            <img src="./assets/img/profile.jpg" alt="..." className="avatar-img rounded-circle" />
                        </div>
                        <div className="info">
                            <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                                <span>
                                    Quvonchbek Murodov
                                    <span className="user-level">Administrator</span>
                                    <span className="caret" />
                                </span>
                            </a>
                            <div className="clearfix" />
                            <div className="collapse in" id="collapseExample">
                                <ul className="nav">
                                    <li>
                                        <Link to={'/'}>
                                            <span className="link-collapse">
                                                Logout
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="nav nav-primary">
                        {/* <li className="nav-item active">
                            <a data-toggle="collapse" href="#dashboard" className="collapsed" aria-expanded="false">
                                <i className="fas fa-home" />
                                <p>Dashboard</p>
                                <span className="caret" />
                            </a>
                            <div className="collapse show" id="dashboard">
                                <ul className="nav nav-collapse active">
                                    <li>
                                        <a href>
                                            <span className="sub-item">Dashboard 1</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li> */}
                        <li className="nav-section">
                            <span className="sidebar-mini-icon">
                                <i className="fa fa-ellipsis-h" />
                            </span>
                            <h4 className="text-section">Components</h4>
                        </li>
                        {
                            link.map((item) => {
                                const btnClasses = classnames('nav-item',{
                                    'active':item.link === currentActive
                                })
                                return (
                                    <li className={btnClasses} key={item.id} onClick={()=>dispatch(btnChange(item.link))}>
                                        <Link to={item.href}>
                                            <i className={item.icon} />
                                            <p>{item.link}</p>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;