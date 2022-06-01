import React from 'react';
import './Auth.css';
import Signin from './Signin';
import Signup from './Signup';
import Social from './Social/Social';

const Auth = () => {
	return (
		<section>
			<div className="authentication">
				<div className="container">
					<div className="row full-height justify-content-center">
						<div className="col-12 text-center align-self-center py-2">
							<div className="authentication pb-5 pt-5 pt-sm-2 text-center">
								<h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
								<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>	
								<label for="reg-log"></label>	
								
								<div className="card-3d-wrap mx-auto">
									<div className="card-3d-wrapper">
										
										<div className="card-front">
											<Signin></Signin>
										</div>

										<div className="card-back">
											<Signup></Signup>
										</div>

									</div>
								</div>
								<Social></Social>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Auth;