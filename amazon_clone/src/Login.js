import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='login'>
            <Link to='/'>
            <img className='login_logo'
             src='https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?resize=740%2C204'
            />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit'className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button  className='login_registerButton'>Create your Amazon Account</button>
            </div>
          
        </div>
    )
}

export default Login
