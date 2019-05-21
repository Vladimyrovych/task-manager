import React, { Component } from 'react';
import './App.scss';
import ControlPanel from './components/controlPanel/ControlPanel';
import TaskList from './components/taskList/TaskList';
import Pagination from './components/pagination/Pagination';
import AuthForm from './components/authForm/AuthForm';
import Requests from './components/requests/requests';
import CreateTask from './components/createTask/CreateTask';
import UpdateTask from './components/updateTask/UpdateTask';

class App extends Component {
	state = {
		isAdminSign: false,
		tasks: [],

		loginValue: '',
		passValue: '',
		isAuthFormShow: false,

		pageCount: 1,
		currentPage: 1,

		sortDirectionName: 'asc',
		sortDirectionEmail: 'asc',
		sortDirectionStatus: 'asc',
		currentSortField: 'username',

		isCreateTaskShow: false,
		userNameValue: '',
		emailValue: '',
		textValue: '',
		status: '',
		taskId: '',

		isUpdateTaskShow: false,
	}

	TaskRequests = new Requests();

	changeText = (textValue) => {
		this.setState({ textValue: textValue });
	}

	/*-------------- -------------------Start create task-----------------------------------------*/
	createTask = () => {
		let formData = new FormData();
		formData.append("username", this.state.userNameValue);
		formData.append("email", this.state.emailValue);
		formData.append("text", this.state.textValue);
		this.TaskRequests.createData(this.createTasksProcessing, formData);
	}
	createTasksProcessing = () => {
		this.closeCreateTask();
		this.TaskRequests.getData(this.getTasksProcessing, 'name', this.state.sortDirectionName, 1);
	}

	openCreateTask = () => {
		this.setState({ isCreateTaskShow: true });
	}
	closeCreateTask = () => {
		this.setState({
			isCreateTaskShow: false,
			userNameValue: '',
			emailValue: '',
			textValue: '',
		});
	}
	changeUserName = (userNameValue) => {
		this.setState({ userNameValue: userNameValue });
	}
	changeEmail = (emailValue) => {
		this.setState({ emailValue: emailValue });
	}
	/*---------------------------------End create task-----------------------------------------*/

	/*---------------------------------Start update task-----------------------------------------*/
	updateTask = () => {
		let formData = new FormData();
		formData.append("status", this.state.satus);
		formData.append("text", this.state.textValue);
		this.TaskRequests.updateData(this.updateTasksProcessing, formData, this.state.taskId);
	}
	updateTasksProcessing = () => {
		this.closeUpdateTask();
		this.TaskRequests.getData(this.getTasksProcessing, this.state.currentSortField, this.state.sortDirection, this.state.currentPage);
	}

	openUpdateTask = (status, textValue, taskId) => {
		this.setState({
			isUpdateTaskShow: true,
			status: status,
			textValue: textValue,
			taskId: taskId
		});
	}
	closeUpdateTask = () => {
		this.setState({ isUpdateTaskShow: false });
	}
	/*---------------------------------End update task-----------------------------------------*/

	/*---------------------------------Start auth-----------------------------------------*/
	openAuthForm = () => {
		this.setState({ isAuthFormShow: true });
	}
	clickCencelAuth = () => {
		this.setState({ isAuthFormShow: false });
	}
	changeLogin = (loginValue) => {
		this.setState({ loginValue: loginValue });
	}
	changePass = (passValue) => {
		this.setState({ passValue: passValue });
	}
	clickSignIn = () => {
		if (this.state.loginValue === 'admin' && this.state.passValue === '123') {
			this.clickCencelAuth();
			this.setState({ isAdminSign: true });
		} else {
			this.clickCencelAuth();
			this.setState({ isAdminSign: false });
		}
	}
	/*---------------------------------End auth-----------------------------------------*/

	getTasksProcessing = (response, currentPage) => {
		this.setState({
			tasks: response.message.tasks,
			currentPage: currentPage,
			pageCount: (Math.trunc(response.message.total_task_count / 3) + 1),
		})
	}
	toPage = (pageNumber) => {
		if (this.state.currentSortField === 'username') {
			this.TaskRequests.getData(this.getTasksProcessing, this.state.currentSortField, this.state.sortDirectionName, pageNumber)
		}
		if (this.state.currentSortField === 'email') {
			this.TaskRequests.getData(this.getTasksProcessing, this.state.currentSortField, this.state.sortDirectionEmail, pageNumber)
		}
		if (this.state.currentSortField === 'status') {
			this.TaskRequests.getData(this.getTasksProcessing, this.state.currentSortField, this.state.sortDirectionStatus, pageNumber)
		}
	}
	getSortedData = (currentSortField) => {
		if (this.state.currentSortField === currentSortField) {
			if (currentSortField === 'username') {
				if (this.state.sortDirectionName === 'asc') {
					this.setState({ sortDirectionName: 'desc' });
					this.TaskRequests.getData(this.getTasksProcessing, currentSortField, 'desc', this.state.currentPage);	
				} else {
					this.setState({ sortDirectionName: 'asc' });
					this.TaskRequests.getData(this.getTasksProcessing, currentSortField, 'asc', this.state.currentPage);
				}			
			}
			if (currentSortField === 'email') {
				if (this.state.sortDirectionEmail === 'asc') {
					this.setState({ sortDirectionEmail: 'desc' });
					this.TaskRequests.getData(this.getTasksProcessing, currentSortField, 'desc', this.state.currentPage);
				} else {
					this.setState({ sortDirectionEmail: 'asc' });
					this.TaskRequests.getData(this.getTasksProcessing, currentSortField, 'asc', this.state.currentPage);
				}	
			}
			if (currentSortField === 'status') {
				if (this.state.sortDirectionStatus === 'asc') {
					this.setState({ sortDirectionStatus: 'desc' });
					this.TaskRequests.getData(this.getTasksProcessing, currentSortField, 'desc', this.state.currentPage);
				} else {
					this.setState({ sortDirectionStatus: 'asc' });
					this.TaskRequests.getData(this.getTasksProcessing, currentSortField, 'asc', this.state.currentPage);
				}	
			}
		} else {
			this.setState({ currentSortField: currentSortField });
			if (currentSortField === 'username') {
				this.TaskRequests.getData(this.getTasksProcessing, currentSortField, this.state.sortDirectionName, this.state.currentPage);
			}
			if (currentSortField === 'email') {
				this.TaskRequests.getData(this.getTasksProcessing, currentSortField, this.state.sortDirectionEmail, this.state.currentPage);
			}
			if (currentSortField === 'status') {
				this.TaskRequests.getData(this.getTasksProcessing, currentSortField, this.state.sortDirectionStatus, this.state.currentPage);
			}
		}
	}

	render() {
		if (this.state.tasks.length === 0) {
			this.TaskRequests.getData(this.getTasksProcessing, this.state.currentSortField, this.state.sortDirectionName, this.state.currentPage);
			return null;
		}

		let authForm = '';
		if (this.state.isAuthFormShow === true) {
			authForm = <AuthForm
				clickCencelAuth={this.clickCencelAuth}
				loginValue={this.state.loginValue}
				passValue={this.state.passValue}
				changeLogin={this.changeLogin}
				changePass={this.changePass}
				clickSignIn={this.clickSignIn}
			/>
		} else {
			authForm = null;
		}

		let createTask = '';
		if (this.state.isCreateTaskShow === true) {
			createTask = <CreateTask
				closeCreateTask={this.closeCreateTask}
				createTask={this.createTask}
				userNameValue={this.state.userNameValue}
				emailValue={this.state.emailValue}
				textValue={this.state.textValue}
				changeUserName={this.changeUserName}
				changeEmail={this.changeEmail}
				changeText={this.changeText}
			/>
		} else {
			createTask = null;
		}

		let updateTask = '';
		if (this.state.isUpdateTaskShow === true) {
			updateTask = <UpdateTask
				closeUpdateTask={this.closeUpdateTask}
				updateTask={this.updateTask}
				status={this.state.status}
				textValue={this.state.textValue}
				changeText={this.changeText}
			/>
		} else {
			updateTask = null;
		}

		return (
			<div className='app jumbotron container'>
				<header className='app__header'>
					{this.state.isAdminSign === true ? <h4 className='app__hello-admin'>Hello, admin!</h4> : null}
					<button className='app__sign-in-btn btn-lg btn-warning' onClick={this.openAuthForm}>SIGN IN</button>
				</header>
				<h1 className='app__title'>Task manager</h1>
				<main className='app__main'>
					<ControlPanel
						currentSortField={this.state.currentSortField}
						getSortedData={this.getSortedData}
						openCreateTask={this.openCreateTask}
					/>
					<TaskList tasks={this.state.tasks} isAdminSign={this.state.isAdminSign} openUpdateTask={this.openUpdateTask} />
				</main>
				<nav className='app__pagination-nav'>
					<Pagination pageCount={this.state.pageCount} currentPage={this.state.currentPage} toPage={this.toPage} />
				</nav>
				{authForm}
				{createTask}
				{updateTask}
			</div>
		)
	}

}

export default App;
