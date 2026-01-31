import axios from "axios";
import React, { useState } from 'react';
import './LoginPage.scss';
import illustration_img from './LoginPage_imgs/image 1.png'
import illustration_img2 from './LoginPage_imgs/agro App 1.png'
import illustration_img3 from './LoginPage_imgs/Frame.png'
import { NavLink } from 'react-router-dom';
const LoginPage = () => {
    const API_URL = "https://697b4e410e6ff62c3c5ba3df.mockapi.io/Login/";
    const [rider, Setrider] = useState(false)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleClick = async () => {
        try {
            const response = await axios.get(API_URL);

            const users = response.data;

            const foundUser = users.find(
                (user) =>
                    user.username === username &&
                    user.password === password
            );

            if (foundUser) {
                Setrider(true)
            } else {
                alert("Error: wrong username or password");
            }
        } catch (error) {
            console.error(error);
            alert("Server error");
        }
    };
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Logging in with:", username, password);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                {/* Left Side: Form */}
                <div className="login-form-section">
                    <div className="logo-container">
                        <img src={illustration_img2} alt="Agro App Logo" className="logo" />
                    </div>

                    <form onSubmit={handleLogin} className="login-form">
                        <div className="input-group input-group12">
                            <label>Telefon raqam</label>
                            <div className="phone-input-wrapper">
                                {/* <div className="country-code">
                  <img src={illustration_img3} alt="UZ" />
                  <span className="dropdown-arrow"></span>
                </div> */}
                                <input
                                    type="text"
                                    placeholder="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Parol kiritish</label>
                            <input
                                type="password"
                                placeholder="●●●●●"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {rider ?
                            <NavLink onClick={handleClick} to={'/statistics'}>
                                <button type="submit" className="login-btn">Kirish</button>
                            </NavLink>
                            :
                            <button onClick={handleClick} type="submit" className="login-btn">Kirish</button>
                        }

                        <a href="/reset" className="forgot-password">
                            parolni qayta tiklash
                        </a>
                    </form>
                </div>

                {/* Right Side: Illustration */}
                <div className="login-illustration-section">
                    <img src={illustration_img} alt="Farmer with drones" />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;