import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import * as yup from "yup";
import { TextField } from '@material-ui/core';
import '../styles/login.css'

const schema = yup.object().shape({
    username: yup.string().required('Username is a required field.'),
    password: yup.string().required('Password is a required field.')
})

const Login = () => {

    const history = useHistory();
    const [errorState, setErrorState] = useState({
        username: '',
        password: ''
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
            username: '',
            password: ''
        })
        

        // axios
        //     .post(`https://reqres.in/api/users`, userCredentials)
        //     .then(res => setData(res))
        //     .catch(err => {console.log(err.res)})
        // console.log('Login successful')    

        //make a POST request and send the userCredentials obj to the API
        axios
            .post(`insert the server endpoint here`, userCredentials)
            //find the payload property (token) returned from the API 28:44
            .then(res => {
                console.log('Results:', res);
                window.localStorage.setItem('token', res.data.payload)
                //navigate the user to /protected dashboard
                history.push('/dashboard');
            })
            .catch(err => {console.log(err)})
    }
    
    return (
        <div className="login-container">
            <div>
            <form onSubmit={submitHandler} className='login-wrapper'>
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
                
                <button type='submit' className='form-btn' >Login</button>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </form>
            </div>
            <p>Don't have an account? Click <Link to='/register'>here</Link> to register.</p>
        </div>
    )
}

export default Login;