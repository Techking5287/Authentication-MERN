import "./LoginForm.css";
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const res = await axios.post(`/login`, {email: email, password: password});
        const {success, message, token} = res.data;

        if(success) {
            console.log("Sucess");
            // localStorage.setItem("token", token);
        }

        else if(message === "not verfied") {
            console.log(message);
        }

        else if(message === "user does not exist") {
            console.log(message);
        }
        
        // TODO: -> Manuplations on client side after the response;
    }

    return (
        <div className="login-from-outer-container">
            <div className="login-from-inner-container">
                <h2>Login Here</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">Email</label>
                    <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required/>

                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" min="6" onChange={(event) => setPassword(event.target.value)} required/>

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;