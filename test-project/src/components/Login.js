import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import './Login.css';


const Login = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = async(e) => {
        e.preventDefault();
 
        const userCredentials = {
            name: name,
            email: email,
            password: password,
        }
        dispatch(
            login(userCredentials)
        );
        await localStorage.setItem('Auth', JSON.stringify(userCredentials))

    };
    
    return (
        <>
        <div className='container_header'>
        <h1>Company A</h1>
        <h2>Login</h2>
        </div>

        <div className='login'>
            <form className='form-log' onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> 
                {
                    name && email && password 
                    ? <button type='submit' className='submit_btn'>Sign in</button>
                    :<button type='submit' disabled className='submit_btn'>Sign in</button>
                }
            </form>
        </div>
        <div className='container'>
        <h3>Footer</h3>
        </div>
        
        </>
    )
}

export default Login