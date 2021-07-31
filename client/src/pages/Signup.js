import React,{ useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
    const [formState,setFormState] = useState({username:'',email:'',password:''});
    const [createUser,{error}] = useMutation(CREATE_USER);

    const handleChange = event => {
        const { name,value } = event.target;

        setFormState({
            ...formState,
            [name]:value
        });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            const { data } = await createUser({
                variables:{ ...formState}
            });
            Auth.login(data.createUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className="flex-row justify-center mb-4">
            <div className="col-12 col-md-6">
                <div className="card">
                    <h4 className="card-header">Sign Up</h4>
                    <form onSubmit={handleFormSubmit}>
                        <input
                        className="form-input"
                        placeholder="Your username"
                        name="username"
                        type="username"
                        id="username"
                        value={formState.username}
                        onChange={handleChange}
                        />
                        <input
                          className="form-input"
                          placeholder="Your email"
                          name="email"
                          type="email"
                          id="email"
                          value={formState.email}
                          onChange={handleChange}
                          />  
                        <input
                        className="form-input"
                        name="password"
                        type="password"
                        id="password"
                        value={formState.password}
                        onChange={handleChange}
                        />
                        <button className="btn d-block w-100" type="submit">
                            Submit
                            </button> 

                    </form>
                    {error && <div>Signup Failed</div>}
                </div>
            </div>
        </main>
    )
}

export default Signup;