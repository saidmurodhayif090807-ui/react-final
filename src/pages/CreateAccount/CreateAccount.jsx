import React, { useState } from 'react';
import './CreateAccount.scss';
import axios from "axios";
import { NavLink } from 'react-router-dom';
const CreateAccount = () => {
    const API_URL = "https://697b4e410e6ff62c3c5ba3df.mockapi.io/Login/";
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [keyword, Setkeyword] = useState("");
    const [keypassword, Setkeypassword] = useState("");
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCreate = (e) => {
        e.preventDefault();
        console.log("Account Data:", formData);
    };
    const CreateAccount = async () => {
        try {
            const response = await axios.post(API_URL, {
                username: keyword,
                password: keypassword,
            });
            console.log("User saved!")
        } catch (error) {
            console.error(error);
            alert("Error saving user");
        }
    };

    return (
        <div className="page-wrapper">
            <div className="create-card">
                <h1>Create Account</h1>
                <form onSubmit={handleCreate}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            onChange={(e) => {
                                handleChange(e);
                                Setkeyword(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            onChange={(e) => {
                                handleChange(e);
                                Setkeypassword(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <NavLink to={'/successfullLogin'}>
                        <button onClick={CreateAccount} type="submit" className="glow-button">
                            Create
                        </button>
                    </NavLink>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;