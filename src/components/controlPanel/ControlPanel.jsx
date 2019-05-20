import React from 'react';
import './ControlPanel.scss';

const ControlPanel = ({sortField, toSortBy, pageNumber, openCreateTask}) => {
	let sortButtonsGroup
	if (sortField === 'username') {
		sortButtonsGroup = (
			<div className='control-panel__sort-controls btn-group'>
				<button className='control-panel__sort-by-name btn btn-secondary active' onClick={() => toSortBy('username', pageNumber)} >Name</button>
				<button className='control-panel__sort-by-name btn btn-secondary' onClick={() => toSortBy('email', pageNumber)} >Email</button>
				<button className='control-panel__sort-by-name btn btn-secondary' onClick={() => toSortBy('status', pageNumber)} >Status</button>
			</div>
		)
	}
	if (sortField === 'email') {
		sortButtonsGroup = (
			<div className='control-panel__sort-controls btn-group'>
				<button className='control-panel__sort-by-name btn btn-secondary' onClick={() => toSortBy('username', pageNumber)} >Name</button>
				<button className='control-panel__sort-by-name btn btn-secondary active' onClick={() => toSortBy('email', pageNumber)} >Email</button>
				<button className='control-panel__sort-by-name btn btn-secondary' onClick={() => toSortBy('status', pageNumber)} >Status</button>
			</div>
		)
	}
	if (sortField === 'status') {
		sortButtonsGroup = (
			<div className='control-panel__sort-controls btn-group'>
				<button className='control-panel__sort-by-name btn btn-secondary' onClick={() => toSortBy('username', pageNumber)} >Name</button>
				<button className='control-panel__sort-by-name btn btn-secondary' onClick={() => toSortBy('email', pageNumber)} >Email</button>
				<button className='control-panel__sort-by-name btn btn-secondary active' onClick={() => toSortBy('status', pageNumber)} >Status</button>
			</div>
		)
	}

	return (
		<div className='app__control-panel control-panel'>
			<div className='control-panel__sort-block'>
				<h6 className='control-panel__sort-name'>Sort by:</h6>
				{sortButtonsGroup}
			</div>
			<button className='control-panel__create-task-btn btn-lg btn-success' onClick={openCreateTask} >NEW TASK</button>
		</div>
	)	
}

export default ControlPanel;