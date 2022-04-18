import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import '../Register/Register.css';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })
    
    const [ signInWithEmailAndPassword, user, loading, hookError ] = useSignInWithEmailAndPassword(auth);
    
    
    // const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
        // console.log(userInfo.email, userInfo.password);
    }

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
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";

    useEffect( () => {
        if (user) {
            navigate(from, {replace: true});
        }
    }, [user]);



    return (
        <div className='container'>
            <h2 className='mt-4 mb-4'>Login</h2>
            <ToastContainer />
            <Form className="w-50" onSubmit={handleFormSubmit}>
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
                
                <Button variant="primary" type="submit">
                    Sign In
                </Button>
                { hookError && <p className="text-danger">{hookError?.message}</p> }
            </Form>
            <p>New User? <Link to='/register'>Registration Here</Link> </p>
            <p>Forget password? <Button onClick={async () => {
          await sendPasswordResetEmail(userInfo.email);
          toast('Sent email for reset password');
        }}>Reset Password</Button></p>
        </div>
    );
};

export default Login;