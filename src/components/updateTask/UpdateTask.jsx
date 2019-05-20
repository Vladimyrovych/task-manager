import React from 'react';
import './UpdateTask.scss';

const UpdateTask = ({status, textValue, closeUpdateTask, updateTask, changeText}) => {
	let checkboxIsDone = '';
	if (status === 10) {
		checkboxIsDone = <input className="task-list-item__done-native-input custom-control-input" defaultChecked={true} type="checkbox" id={`done`}/>
	} else {
		checkboxIsDone = <input className="task-list-item__done-native-input custom-control-input"  defaultChecked={false} type="checkbox" id={`done`}/>
	}
	
	const onClickCencel = (event) => {
		event.preventDefault();
		closeUpdateTask();
	}
	const onClickUpdateTask = (event) => {
		event.preventDefault();
		updateTask();
	}
	const onChangeText = (event) => {
		changeText(event.target.value);
	}

	return (
		<div className={'app__update-task update-task'}>
			<form className="update-task__body card card-body">
				<div className="update-task__user-name-block form-group">
					<div className="task-list-item__done-control custom-control custom-checkbox">
						{checkboxIsDone}
						<label className="task-list-item__done-label custom-control-label" htmlFor={`done`}>DONE</label>
					</div>
				</div>
				<div className="update-task__text-block form-group">
					<label className='update-task__text-label' htmlFor="text">Text</label>
					<textarea className='update-task__text-label form-control' id="text" defaultValue={textValue} onChange={onChangeText} rows="1" placeholder="Enter new text"></textarea>
				</div>
				<button className="update-task__cencel-btn btn btn-secondary" onClick={onClickCencel}>CANCEL</button>
				<button type="submit" className="update-task__submit-btn btn btn-primary" onClick={onClickUpdateTask}>UPDATE</button>
			</form>
		</div>
	)
}

export default UpdateTask;