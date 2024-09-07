import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css"; // Import the CSS file

function Login() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("/login", formValues)
            .then((res) => {
                console.log(res);
                navigate("/dashboard");
            })
            .catch((err) => {
                console.log( "Error: ", err );
                alert( "Error: ", err.message );
            });
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1 className="login-header">Login</h1>
                <form onSubmit={handleSubmit} className="form-fields">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                    <Link to="/signup" className="signup-link">
                        Don't have an Account? Sign Up
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
