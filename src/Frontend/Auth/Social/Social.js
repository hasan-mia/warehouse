import React, { useEffect } from 'react';
import { useAuthState, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle, useSignInWithYahoo } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';
import './Social.css'
const Social = () => {
	const [signInWithGoogle, googleUser, googleloading, googleError] = useSignInWithGoogle(auth);
	const [signInWithFacebook, facbookuser, facebookloading, facebookerror] = useSignInWithFacebook(auth);
	const [signInWithYahoo, yahoouser, yahooloading, yahooerror] = useSignInWithYahoo(auth);
	const [signInWithGithub, githubuser, githubloading, githuberror] = useSignInWithGithub(auth);

	const [user, loading, error] = useAuthState(auth);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	useEffect(() => {
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
	}, [user]);
	return (
		<div className='row justify-content-center'>
			 <div className="social_buttons w-md-75 w-25">
				<button onClick={() => signInWithGoogle()}><i className="fab fa-google fa-x"></i>Continue with Google</button>
				<button onClick={() => signInWithFacebook()}><i className="fab fa-facebook-f fa-x"></i>Continue with Facebook</button>
				<button onClick={() => signInWithYahoo()}><i className="fab fa-yahoo fa-x"></i>Continue with Yahoo</button>
				<button onClick={() => signInWithGithub()}><i className="fab fa-github fa-x"></i>Continue with Github</button>
			</div>
		</div>
	);
};

export default Social;