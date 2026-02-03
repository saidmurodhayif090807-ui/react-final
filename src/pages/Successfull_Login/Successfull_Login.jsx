import React from 'react';
import './Successfull_Login.scss';
import { NavLink } from 'react-router-dom';

const Successfull_Login = () => {
    return (
        <div className="success-container">
            <div className="success-card">
                <div className="icon-wrapper">
                    <div className="checkmark-circle">
                        <span className="checkmark">L</span>
                    </div>
                    {/* Confetti elements can be added as spans for CSS animation */}
                    <span className="dot dot-1"></span>
                    <span className="dot dot-2"></span>
                    <span className="line line-1"></span>
                </div>

                <h2 className="success-title">Account created successfully!</h2>

                <p className="success-message">
                    Congratulations! Your account has been created. Please log in with
                    your credentials to get started.
                </p>

                <NavLink to={'/'}>
                    <button className="login-button">
                        Login to get started
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default Successfull_Login;