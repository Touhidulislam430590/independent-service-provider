import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../../images/google-logo.png';
import github from '../../../images/github-logo.png';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import { sendEmailVerification } from 'firebase/auth';
import './Register.css';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })
    
    const [ createUserWithEmailAndPassword, user, loading, hookError ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
    
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    

    const handleEmailBlur = (event) => {
        setUserInfo({...userInfo, email: event.target.value});
    };

    const handlePasswordBlur = (event) => {
        const checkPassword = /.{8,}/;
        const validPassword = checkPassword.test(event.target.value);
        if(validPassword){
            setUserInfo({...userInfo, password: event.target.value});
        }else{
            setErrors({...errors, password:'Password must be at least 8 character'});
        }
    };

    const handleConfirmPassword = (event) => {
        if(event.target.value === userInfo.password){
            setUserInfo({...userInfo, confirmPassword: event.target.value});
        }else{
            setErrors({...errors, password:'Password does not match'});
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        // console.log(userInfo.email, userInfo.password);
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect( () => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        navigate(from);
    }

    return (
        <div className='container'>
            <h2 className='mt-4 mb-4'>Registration Form</h2>

            <Form className="w-50" onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Username" required onBlur={handleEmailBlur} />                    
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required onBlur={handleEmailBlur} />
                    { errors && <p className='text-danger'>{errors?.email}</p> }
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required onBlur={handlePasswordBlur} />
                    { errors && <p className='text-danger'>{errors?.password}</p> }
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" required onBlur={handleConfirmPassword} />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Register
                </Button>
                { hookError && <p className="text-danger">{hookError?.message}</p> }
            </Form>
            <p>Already have an account? <Link to='/signin'>Login Here</Link> </p>

            <div className="d-flex ">
                <div className='make-underline'></div>
                <p className='px-3'>or</p>
                <div className='make-underline'></div>
            </div>

            <Button className='btn btn-primary d-block my-3' onClick={handleGoogleSignIn}>
                <img src={google} height="24px" alt="" className='me-2' />
                Sign Up with Google
            </Button>

            <Button className='btn btn-info  d-block '>
                <img src={github} height="24px" alt="" className='me-2' />
                Sign Up with Github
            </Button>
        </div>
    );
};

export default Login;