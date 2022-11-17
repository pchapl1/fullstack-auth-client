import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from "../hooks/auth"
import { useNavigate } from "react-router-dom"

const LoginPage = (props) => {

    const auth = useAuth()

    const navigate = useNavigate()

    const [email, setEmail] = useState("")

    const [ password, setPassword] = useState("")

    const [ loginMessage, setLoginMessage] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const login = async ()=> {
        await auth.login(email, password);
        if (login.success){
            navigate('/')
        } 
        if (!login.success){
            setLoginMessage(login.message)
        }
    }

    return (
        <div className="login-page">
            <h1>Login Page</h1>
            <h3>{loginMessage}</h3>

            <Form>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={handleEmail} type="text" name="email" placeholder="Enter Email" />
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={handlePassword} name="password" placeholder="Enter Password" />
                </Form.Group>
                <Button onClick={login} variant="primary">
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default LoginPage;