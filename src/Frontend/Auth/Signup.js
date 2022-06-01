import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast} from 'react-toastify';
import auth from '../../Firebase/Firebase.init';
import './Auth.css';
const Signup = () => {
	const [userInfo, setUserInfo] = useState({
		displayName: "",
        email: "",
        password: "",
        confirmPass: "",
    });
    const [errors, setErrors] = useState({
		displayName: "",
        email: "",
        password: "",
        general: "",
    });
    // const [showPass, setShowPass] = useState(false);

    const [createUserWithEmailAndPassword, userEmail, loadingEmail, hookError] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    
	const handleName =(e)=>{
        setUserInfo({ ...userInfo, displayName: e.target.value });
        setErrors({ ...errors, displayName: "" });
	}

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

    const handleConfirmPassword = (e) => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPass: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password's don't match" });
            setUserInfo({ ...userInfo, confirmPass: "" });
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        toast.success("Email vaification link sent");
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
		<form onSubmit={handleRegister} className="center-wrap">
			<div className="authentication text-center">
				<h4 className="mb-4 pb-3">Sign Up</h4>
				<div className="form-group"> 
					<input onChange={handleName} type="text" name="name" className="form-style" placeholder="Your Full Name" autocomplete="none"/>	<i className="input-icon fa fa-user"></i>	
				</div>
				<div className="form-group mt-2"> 
					<input onChange={handleEmail} type="email" name="email" className="form-style" placeholder="Your Email" autocomplete="none" required/>	<i className="input-icon fa fa-at"></i>	
                    {errors?.email && <p className="error">{errors.email}</p>}
                </div>
				<div className="form-group mt-2"> 
					<input onChange={handlePassword} type="password" name="password" className="form-style" placeholder="Your Password" autocomplete="none" required/>	<i className="input-icon fa fa-lock"></i>	
                    {errors?.password && <p className="error">{errors.password}</p>}
                </div>
				<div className="form-group mt-2"> 
					<input onChange={handleConfirmPassword} type="password" name="confirmpassword" className="form-style" placeholder="Confirm Password" autocomplete="none" required/>	<i className="input-icon fa fa-lock"></i>	
				</div>
				<button className="btn mt-4">Signup</button>	
			</div>
		</form>
	);
};
export default Signup;