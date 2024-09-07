import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Signup.css"; // Import the CSS file

function Signup() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        let { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("/signup", formValues)
            .then((res) => {
                navigate("/login");
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h1 className="signup-header">Sign Up</h1>
                <form onSubmit={handleSubmit} className="form-fields">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleChange}
                            required
                            className="form-input"
                        />
                    </div>
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
                    <Link to="/login" className="login-link">
                        Already have an Account? Login
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
