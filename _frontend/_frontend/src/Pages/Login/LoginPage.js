import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function LoginPage(props) {
    return (
        <div id='login_form'>
            <div className="form">
                <h2>Login</h2>
                <div className="input">
                    <div className="inputBox">
                        <label>Email:</label>
                        <input type="text" placeholder="example@xyz.com" />
                    </div>
                    <div className="inputBox">
                        <label>Parol:</label>
                        <input type="password" placeholder="······" />
                    </div>
                    <div className="inputBox">
                        <button>Kirish</button>
                    </div>
                </div>
                <p className="forget">Parol esda chiqdimi? <Link to="/">Shu yerga bosing</Link></p>
            </div>
        </div>
    );
}

export default LoginPage;