export default class Requests {
	constructor() {
		this.baseUrl = 'https://uxcandy.com/~shapoval/test-task-backend/';
	}

	getData = (resultsProcessing, sortField, sortDirection, page) => {
		const url = `${this.baseUrl}?developer=Name&sort_field=${sortField}&sort_direction=${sortDirection}&page=${page}`;
        fetch(url)
        .then(response => response.json())
        .then(response => {
            resultsProcessing(response, page);
        })
        .catch((e) => console.log(e));
	}

	createData = (resultsProcessing, formData) => {
		const url = `${this.baseUrl}create?developer=Example`;
		fetch(url, {
			method: 'POST',
			body: formData
		})
        .then(response => response.json())
        .then(response => {
            resultsProcessing(response);
        })
        .catch((e) => console.log(e));
	}

	updateData = (resultsProcessing, formData, taskId) => {
		const url = `${this.baseUrl}?developer=Name/edit/${taskId}`;
		fetch(url, {
			method: 'POST',
			body: formData
		})
        .then(response => response.json())
        .then(response => {
			resultsProcessing();
        })
        .catch((e) => console.log(e));
	}
}