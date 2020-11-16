import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
            <img className='login_logo'
             src='https://completemusicupdate.com/wp-content/uploads/2016/05/amazon1250.jpg '
            />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text'  />

                    <h5>Password</h5>
                    <input type='password' v />

                    <button type='submit' className='login_signInButton'>Sign In</button>
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
