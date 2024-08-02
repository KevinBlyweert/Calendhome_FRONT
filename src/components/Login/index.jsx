//eslint-disable-next-line
import React, { useContext, useEffect } from 'react';
import { FormWrapper } from '../Wrapper';
import { UserContext } from '../../utils/context';

export default function Login() {
    const { addToken } = useContext(UserContext)
    const handleLogin = (e) => {
        e.preventDefault()
        addToken('hello');
        window.location = "/"
    };
    // useEffect(() => localStorage.setItem("token", token), [token])

    return (
        <FormWrapper log={true}>
            <input type="radio" name="accordion" id="radio1" defaultChecked />
            <label htmlFor="radio1">Déjà utilisateur?</label>
            <form onSubmit={handleLogin}>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </FormWrapper>
    )
}