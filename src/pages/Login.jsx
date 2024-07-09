import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const authContext = useContext(AuthContext)

    function login() {
        const isCorrectUsername = username === "user@email.com";
        const isCorrectPassword = password === "password";
        if (isCorrectUsername && isCorrectPassword) {
            authContext.setToken("1234");
            navigate("/dashboard");
        }
    }

    return (
        <Container>
            <h1>Login</h1>
            <Form>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label >Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder="user@email.com"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Form.Text className='text-muted'>We&apos;ll never share your email with anyone else.</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId='formBasicPassword'>
                    <Form.Label >Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button variant='primary' onClick={login}>Login</Button>
            </Form>
        </Container>
    )
}