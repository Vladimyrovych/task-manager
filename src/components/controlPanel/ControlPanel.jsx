import React from 'react';
import './ControlPanel.scss';

const ControlPanel = ({currentSortField, getSortedData, openCreateTask}) => {
	let sortButtonsGroup
	if (currentSortField === 'username') {
		sortButtonsGroup = (
			<div className='control-panel__sort-controls btn-group'>
				<button className='control-panel__sort-by-name btn btn-secondary active' onClick={() => getSortedData('username')} >Name</button>
				<button className='control-panel__sort-by-name btn btn-secondary' onClick={() => getSortedData('email')} >Email</button>
				<button className='control-panel__sort-by-name btn btn-secondary' onClick={() => getSortedData('status')} >Status</button>
			</div>
		)
	}
	if (currentSortField === 'email') {
		sortButtonsGroup = (
			<div className='control-panel__sort-controls btn-group'>
				<button className='control-panel__sort-by-name btn btn-secondary' onClick={() => getSortedData('username')} >Name</button>
				<button className='control-panel__sort-by-name btn btn-secondary active' onClick={() => getSortedData('email')} >Email</button>
				<button className='control-panel__sort-by-name btn btn-secondary' onClick={() => getSortedData('status')} >Status</button>
			</div>
		)
	}
	if (currentSortField === 'status') {
		sortButtonsGroup = (
			<div className='control-panel__sort-controls btn-group'>
				<button className='control-panel__sort-by-name btn btn-secondary' onClick={() => getSortedData('username')} >Name</button>
				<button className='control-panel__sort-by-name btn btn-secondary' onClick={() => getSortedData('email')} >Email</button>
				<button className='control-panel__sort-by-name btn btn-secondary active' onClick={() => getSortedData('status')} >Status</button>
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