import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../hooks/auth";

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT

const HomePage = (props) => {

    const auth = useAuth()

    const [message, setMessage] = useState("")

    useEffect(()=>{

        if (auth.userToken !== null){
            fetchMessage()
        } else {
            setMessage("")
        }
        const fetchMessage = async ()=> {
            const response = await fetch(`${urlEndpoint}/users/message`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken
                }
            })
            setMessage(response)
        }

            


    }, [auth.userToken])

    return (
        <div className="home-page">
            <h1>Fullstack Auth Home Page</h1>
        </div>
    )
}

export default HomePage;