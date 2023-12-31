import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./Textinput";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(email, password);
            navigate("/");
        } catch (err) {
            console.log(err);
            setLoading(false);
            // setError(err.message);
            setError("Username or password was not correct!");
        }
    }

    return (
        <Form style={{ height: "330px" }} onSubmit={handleSubmit}>
            <TextInput
                type="email"
                placeholder="Enter email"
                icon="alternate_email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextInput
                type="password"
                placeholder="Enter password"
                icon="lock"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error">{error}</p>}

            <Button type="submit" disabled={loading}>
                <span>Submit Now</span>
            </Button>


            <div className="info">
                Don't have an account? <Link to="/signup">Signup</Link> instead.
            </div>
        </Form>
    );
}