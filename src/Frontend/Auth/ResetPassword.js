import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.init';

const ResetPassword = () => {
	const [email, setEmail] = useState('');
	const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

	const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

	const handleReset = async () =>{
		await sendPasswordResetEmail(email);
		toast.success("Sent a mail to reset your password")
		 navigate(from, { replace: true });
	}

	if (sending) {
		return <h3 className='text-center text-softwhite'>Sending...</h3>;
	}

  return (
	  <section className='reset-pass'>
		<div className="d-flex justify-content-center">
			<div className="w-50">
				<div className="authentication text-center">
					<h4 className="py-2">Reset Password</h4>
					<div className="form-group py-2"> 
						<input type="email" className="form-style" placeholder="Your Email" autocomplete="none"/><i className="input-icon fa fa-at"></i>	
					</div>
					<button className="btn mt-3" onClick={() => handleReset()}>Reset password</button>	
				</div>
			</div>
		</div>
	  </section>
  );
};

export default ResetPassword;