import React from 'react';
import TaskListItem from '../taskListItem/TaskListItem';
import './TaskList.scss';

const TaskList = ({tasks, isAdminSign, openUpdateTask}) => {
	const taskListItems = tasks.map((task) => {
		return (
			<TaskListItem
				status={task.status}
				userName={task.username}
				userEmail={task.email}
				text={task.text}
				id={task.id}
				isAdminSign={isAdminSign}
				key={task.id}
				openUpdateTask={openUpdateTask}
			/>
		)
	})

	return (
		<ul className='app__task-list task-list list-group'>
			{taskListItems}
		</ul>
	)
}

export default TaskList;