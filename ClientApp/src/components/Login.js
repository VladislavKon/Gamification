import React from "react";
import { useState } from "react";
import { Redirect } from 'react-router-dom'; 

const Login = (setName) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false)

    const submit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4226/api/login', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();
        setRedirect(true);
        setName(content.name);
    }
    if (redirect){
        return <Redirect to="/"/>;
     }
    

    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" 
                onChange={e=>setEmail(e.target.value)}
            />

            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" 
                onChange={e=>setPassword(e.target.value)}
            />

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

        </form>
    );
};

export default Login;

