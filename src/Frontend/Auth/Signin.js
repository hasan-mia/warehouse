import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import auth from '../../Firebase/Firebase.init';
import Loading from '../Loading/Loading';
import './Auth.css';
const Signin = () => {
	const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    });

    const [signInWithEmail, userEmail, loadingEmail, hookError] = useSignInWithEmailAndPassword(auth);    
    const handleEmail = (e) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    };
    const handlePassword = (e) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" });
        }
    };


    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmail(userInfo.email, userInfo.password);
        toast.success("Successfuly Login");
    };

	useEffect(() => {
        if (hookError) {
            switch (hookError?.code) {
                case "auth/invalid-email":
                    toast.error("Please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast.error("Wrong password!!");
                    break;
                default:
                    toast.error("Something went wrong");
            }
        }
    }, [hookError]);
    const [user, loading, error] = useAuthState(auth);
	const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            if (user) {
			// ========Create Token======
            const url = 'https://boiling-basin-90703.herokuapp.com/login';
            fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: user.email
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("accessToken", data.token);
                navigate(from, { replace: true });
            });
		}
        }
    }, [user]);
	return (
		<form onSubmit={handleLogin} className="center-wrap">
			<div className="authentication text-center">
				<h4 className="mb-4 pb-3">Log In</h4>
				<div className="form-group"> 
					<input onChange={handleEmail} type="email" name="email" className="form-style" placeholder="Your Email" id="logemail" autocomplete="none"/>	<i className="input-icon fa fa-at"></i>	
                    {errors?.email && <p className="error">{errors.email}</p>}
                </div>
				<div className="form-group mt-2"> 
					<input onChange={handlePassword} type="password" name="password" className="form-style" placeholder="Your Password" id="logpass" autocomplete="none"/>	<i className="input-icon fa fa-lock"></i>	
                    {errors?.password && <p className="error">{errors.password}</p> }
                </div>
				<button className="btn mt-4">Login</button>	
				<p className="mb-0 mt-4 text-center"> <Link className="link" to="/resetPassword">Forgot your password?</Link> </p>
			</div>
		</form>
	);
};

export default Signin;