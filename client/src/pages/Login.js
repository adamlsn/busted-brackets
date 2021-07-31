import React,{ useState } from 'react';

const Login = props => {
    const [formState,setFormState] = useState({email:'',password:''});

    const handleChange = event => {
        const { name , value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        setFormState({
            email:'',
            password:''
        });
    };

    return(
        <main>
            <div>
                <div>
                    <h4>Login</h4>
                    <div>
                        <form onSubmit={handleFormSubmit}>
                            <input
                            value={formState.email}
                            onChange={handleChange}
                            />
                            <input
                            value={formState.password}
                            onChange={handleChange}
                            />
                            <button type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login;