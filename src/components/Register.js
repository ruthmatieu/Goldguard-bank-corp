import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as yup from "yup";
import { TextField } from '@material-ui/core';
import '../styles/register.css';

const schema = yup.object().shape({
    firstname: yup.string().required('First name is a required field.'),
    lastname: yup.string().required('Last name is a required field.'),
    username: yup.string().required('Username is a required field.'),
    password: yup.string().required('Password is a required field.')
})

const Register = () => {

    const [errorState, setErrorState] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        
    })

    const validator = (e) => {
        yup
          .reach(schema, e.target.name)
          .validate(e.target.value)
          .then((valid) => {
            setErrorState({
              ...errorState,
              [e.target.name]: '',
            });
          })
          .catch((err) => {
            setErrorState({
              ...errorState,
              [e.target.name]: err.errors[0],
            });
          });
      };
    
    const [data, setData] = useState([]);  

    const [userCredentials, setuserCredentials] = useState({
        firstname: '',
        lastname: '',
        username: '',
        password: ''
    })

    const changeHandler = e => {
        e.persist();
        validator(e);
        setuserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
        // console.log(e)
    }

    const submitHandler = e => {
        //prevents automatic refresh
        e.preventDefault();
        //resets form after submitted
        setuserCredentials({
            firstname: '',
            lastname: '',
            username: '',
            password: ''
        })
        // console.log(e)

        axios
            .post(`https://reqres.in/api/users`, userCredentials)
            .then(res => setData(res))
            .catch(err => {console.log(err.res)})
        console.log('Login successful')    
    }
    
    return (
        <div className="register-container" >
            <div className=''>
                <h1>Get started with your account</h1>
                <form onSubmit={submitHandler} className='register-wrapper'>
                    <div>
                        {/* <label htmlFor='firstname'>First Name</label> */}
                        <TextField
                            type="text"
                            id="standard-basic"
                            label="First Name"
                            name="firstname"
                            fullWidth
                            value={userCredentials.firstname}
                            onChange={changeHandler}
                            helperText={errorState.firstname.length > 0 ? (<p className="error">{errorState.firstname}</p>) : null}
                        />
                    </div>
                    <div>
                        {/* <label htmlFor='lastname'>Last Name</label> */}
                        <TextField
                            type="text"
                            id="standard-basic"
                            label="Last Name"
                            name="lastname"
                            fullWidth
                            value={userCredentials.lastname}
                            onChange={changeHandler}
                            helperText={errorState.lastname.length > 0 ? (<p className="error">{errorState.lastname}</p>) : null}
                        />
                    </div>
                    <div>
                        {/* <label htmlFor='username'>Username</label> */}
                        <TextField
                            type="text"
                            id="standard-basic"
                            label="Username"
                            name="username"
                            fullWidth
                            value={userCredentials.username}
                            onChange={changeHandler}
                            helperText={errorState.username.length > 0 ? (<p className="error">{errorState.username}</p>) : null}
                        />
                    </div>
                    <div>
                        {/* <label htmlFor='password'>Password</label> */}
                        <TextField
                            type="password"
                            id="standard-basic"
                            label="Password"
                            name="password"
                            fullWidth
                            value={userCredentials.password}
                            onChange={changeHandler}
                            helperText={errorState.password.length > 0 ? (<p className="error">{errorState.password}</p>) : null}
                        />
                    </div>
                    
                    <button type='submit' className='form-btn'>Create Account</button>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </form>
                <p className='extra'>Already have an account? <Link to='/'>Login</Link></p>
            </div>
        </div>
    )
}

export default Register;