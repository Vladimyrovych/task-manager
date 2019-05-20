import React from 'react';
import './AuthForm.scss';

const AuthForm = ({clickCencelAuth, loginValue, passValue, changeLogin, changePass, clickSignIn}) => {
	const onClickCencel = (event) => {
		event.preventDefault();
		clickCencelAuth();
	}
	const onClickSignIn = (event) => {
		event.preventDefault();
		clickSignIn();
	}
	const onChangeLogin = (event) => {
		changeLogin(event.target.value);
	}
	const onChangePass = (event) => {
		changePass(event.target.value);
	}

	return (
		<div className={`app__auth-form auth-form`}>
			<form className="auth-form__body card card-body">
				<div className="auth-form__login-block form-group">
					<label className='auth-form__login-label' htmlFor="exampleInputEmail1">Login</label>
					<input className="auth-form__login-input form-control" value={loginValue} onChange={onChangeLogin} type="text" id="exampleInputEmail1" placeholder="Enter login"/>
					<small className="auth-form__login-text form-text text-muted">We'll never share your login with anyone else.</small>
				</div>
				<div className="auth-form__password-block form-group">
					<label className='auth-form__password-label' htmlFor="exampleInputPassword1">Password</label>
					<input className="auth-form__password-input form-control" value={passValue} onChange={onChangePass} type="password" id="exampleInputPassword1" placeholder="Password"/>
				</div>
				<button className="auth-form__cencel-btn btn btn-secondary" onClick={onClickCencel}>CANCEL</button>
				<button type="submit" className="auth-form__submit-btn btn btn-primary" onClick={onClickSignIn}>SIGN IN</button>
			</form>
		</div>
	)
}

export default AuthForm;