import React, {SyntheticEvent, useState} from 'react';
import {Redirect} from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('https://localhost:44317/api/user', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            //body: JSON.stringify({
                //userName,
                //password
           //})
        });

        setRedirect(true);
    }


    return (
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please register</h1>

            <input type="username" className="form-control" placeholder="User Name" required
                   onChange={e => setUserName(e.target.value)}
            />

            <input type="password" className="form-control" placeholder="Password" required
                   onChange={e => setPassword(e.target.value)}
            />

            <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
    );
};

export default Register;