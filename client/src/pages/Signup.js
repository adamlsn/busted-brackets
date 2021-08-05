import React,{ useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
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
            <div className="col">
                <div className="card border-info">
                    <h4 className="card-header bg-secondary mb-2">Sign Up</h4>
                    <div className="card-body">
                    
                    <form  className="form-group w-100" onSubmit={handleFormSubmit}>
                        <input
                        className="form-control mb-2"
                        placeholder="Your username"
                        name="username"
                        type="username"
                        id="username"
                        value={formState.username}
                        onChange={handleChange}
                        />
                        <input
                          className="form-control mb-2"
                          placeholder="Your email"
                          name="email"
                          type="email"
                          id="email"
                          value={formState.email}
                          onChange={handleChange}
                          />  
                        <input
                        className="form-control mb-2"
                        placeholder="Your password"
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
                    </div>
                    {error && <div>Signup Failed</div>}
                </div>
            </div>
        </main>
    )
}

export default Signup;