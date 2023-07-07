import React, { useEffect, useState } from 'react'
import css from '../stylesheets/Login.module.css'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux'
import { googleLoginAsync} from '../Redux/feature/userSlice'
import { Link, useNavigate } from "react-router-dom"


const Login = () => {

  const clientId = '50662741066-i3fth4cko7tfal4ju168k766i9v1nrnt.apps.googleusercontent.com';

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSuccess = (res) => {
    console.log('success:', res);
    dispatch(googleLoginAsync(res))
  };
  const onFailure = (err) => {
    console.log('failed', err);
  };

  const data = useSelector(e=>e);
  console.log(data)

  useEffect(() => {
    if(data.user.isAuthenticated) navigate('/dashboard')
    else navigate('/')
  }, [data.user.isAuthenticated])


  return (
    <div id={css.login} className='login'>
    <div id={css.left} className='left'>
        <h1 >Board.</h1>
    </div>
    <div id={css.right} className="right">
        <div id={css.section} className="section">
            <div id={css.sTop}>
            <h1>Sign In</h1>
            <h4>Sign in to your account.</h4>
            </div>

            <button id={css.gl}>
            <GoogleLogin
    clientId={clientId}
    buttonText="Sign in with Google"
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
  />
            </button>
            
            <form id={css.form} >
                  <div id={css.formDiv} className="form-group">
                   <label htmlFor="exampleInputEmail1">Email address</label>
                   <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email'  />
                  </div>
                  <div id={css.formDiv} className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password'   />
                  </div>
                    <Link href='/forgotPassword'>forgot password?</Link>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
                <div id={css.sBot}>
                  <h4>Don't have an account? <Link href='/register'>Register here</Link></h4>
                </div>
        </div>
    </div>
    </div>
  )
}

export default Login