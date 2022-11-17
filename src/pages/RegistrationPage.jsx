import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAuth } from "../hooks/auth"
import { useNavigate } from "react-router-dom"


const RegistrationPage = (props) => {

    const auth = useAuth()

    const navigate = useNavigate()

    const [email, setEmail] = useState("")

    const [ password, setPassword] = useState("")

    const [ registerMessage, setRegisterMessage] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const register = async ()=> {

        const registerResult = await auth.register(email, password);
        
        if (registerResult.success){
            navigate('/login')
        } 
        if (!registerResult.success){
            setRegisterMessage(registerResult.message)
        }
    }

    return (
        <div className="registration-page">
            <h1>Registration Page</h1>
            <h3>{registerMessage}</h3>

            <Form>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={handleEmail} type="text" name="email" placeholder="Enter Email" />
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={handlePassword} name="password" placeholder="Enter Password" />
                </Form.Group>
                <Button onClick={register} variant="primary">
                    Sign Up
                </Button>
            </Form>
        </div>
    )
}

export default RegistrationPage;