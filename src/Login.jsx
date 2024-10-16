import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    // Handle Login
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setMessage('Both email and password are required for login!');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email,
                password,
            });
            setMessage(`Login successful! Welcome, ${response.data.username}`);
        } catch (error) {
            setMessage('Login failed! Invalid credentials.');
        }
    };

    // Handle Forgot Password
    const handleForgotPassword = async (e) => {
        e.preventDefault();
        if (!email) {
            setMessage('Email is required to reset password!');
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/forgot-password', {
                email,
            });
            setMessage(`Password reset successful! Your new password: ${response.data.new_password}`);
        } catch (error) {
            setMessage('Password reset failed! Please check your email.');
        }
    };

    return (
        <div>
            <h2>Login or Reset Password</h2>

            <form>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={handleLogin}>Login</button>
                <button onClick={handleForgotPassword}>Forgot Password</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
