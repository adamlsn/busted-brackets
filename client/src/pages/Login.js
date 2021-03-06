import React,{ useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = props => {
    const [formState,setFormState] = useState({email:'',password:''});
    const [login, { error }] = useMutation(LOGIN_USER);

    const handleChange = event => {
        const { name , value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables:{...formState}
            });
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            email:'',
            password:''
        });
    };

    return(
        <main className="flex-row justify-center mb-4">
            <div className="col">
                <div className="card border-info">
                    <h4 className="card-header bg-secondary">Login</h4>
                    <div className="card-body">
                        <form  className="form-group" onSubmit={handleFormSubmit}>
                            <input
                            className="form-control mb-3"
                            placeholder="Your email"
                            name="email"
                            type="email"
                            id="email"
                            value={formState.email}
                            onChange={handleChange}
                            />
                            <input
                            className="form-control mb-3"
                            placeholder="*****"
                            name="password"
                            type="password"
                            id="password"
                            value={formState.password}
                            onChange={handleChange}
                            />
                            <button className="btn btn-dark btn-lg btn-block" type="submit">
                                Submit
                            </button>
                        </form>
                        {error && <div>Login failed</div>}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login;