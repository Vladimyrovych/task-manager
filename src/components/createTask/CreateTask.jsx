import React from 'react';
import './CreateTask.scss';

const CreateTask = ({userNameValue, emailValue, textValue, closeCreateTask, createTask, changeUserName, changeEmail, changeText}) => {
	const onClickCencel = (event) => {
		event.preventDefault();
		closeCreateTask();
	}
	const onClickCreateTask = (event) => {
		event.preventDefault();
		createTask();
	}
	const onChangeUserName = (event) => {
		changeUserName(event.target.value);
	}
	const onChangeEmail = (event) => {
		changeEmail(event.target.value);
	}
	const onChangeText = (event) => {
		changeText(event.target.value);
	}

	return (
		<div className={'app__create-task create-task'}>
			<form className="create-task__body card card-body">
				<div className="create-task__user-name-block form-group">
					<label className='create-task__user-name-label' htmlFor="username">User name</label>
					<input className="create-task__user-name-input form-control" defaultValue={userNameValue} onChange={onChangeUserName} type="text" id="username" placeholder="Enter user name"/>
				</div>
				<div className="create-task__email-block form-group">
					<label className='create-task__email-label' htmlFor="email">Email</label>
					<input className="create-task__email-input form-control" defaultValue={emailValue} onChange={onChangeEmail} type="email" id="email" placeholder="Enter email"/>
				</div>
				<div className="create-task__text-block form-group">
					<label className='create-task__text-label' htmlFor="text">Text</label>
					<textarea className='create-task__text-label form-control' id="text" defaultValue={textValue} onChange={onChangeText} rows="1" placeholder="Enter text"></textarea>
				</div>
				<button className="create-task__cencel-btn btn btn-secondary" onClick={onClickCencel}>CANCEL</button>
				<button type="submit" className="create-task__submit-btn btn btn-primary" onClick={onClickCreateTask}>CREATE</button>
			</form>
		</div>
	)
}

export default CreateTask;