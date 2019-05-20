import React from 'react';
import './TaskListItem.scss';

const TaskListItem = ({status, userName, userEmail, text, id, isAdminSign, openUpdateTask}) => {
	let checkboxIsDone = '';
	if (status === 10) {
		checkboxIsDone = <input className="task-list-item__done-native-input custom-control-input" disabled='disabled' defaultChecked={true} type="checkbox" id={`done${id}`}/>
	} else {
		checkboxIsDone = <input className="task-list-item__done-native-input custom-control-input" disabled='disabled' defaultChecked={false} type="checkbox" id={`done${id}`}/>
	}

	let editButton = '';
	if (isAdminSign === true) {
		editButton = <button className='task-list-item__edit-btn btn btn-primary' onClick={() => openUpdateTask(status, text, id)}>Edit</button>
	} else {
		editButton = null;
	}

	return (
		<li className='task-list__task-list-item task-list-item list-group-item list-group-item-action'>
			<div className="task-list-item__done-control custom-control custom-checkbox">
				{checkboxIsDone}
				<label className="task-list-item__done-label custom-control-label" htmlFor={`done${id}`}>DONE</label>
			</div>
			<div className='task-list-item__body'>
				<h6 className='task-list-item__user-name'>{userName}</h6>
				<h6 className='task-list-item__user-mail'>{userEmail}</h6>
				<p className='task-list-item__text'>
					<textarea readOnly='readOnly' className='task-list-item__text-area form-control' value={text} rows="1"></textarea>
				</p>
			</div>
			{editButton}
		</li>
	)
}

export default TaskListItem;