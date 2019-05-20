import React from 'react';

const PaginationItem = ({pageNumber, isCurrentPage, toPage}) => {
	let classActiveBtn = '';
	if (isCurrentPage === true) {
		classActiveBtn = 'active'
	}

	const toThisPage = () => {
		toPage(pageNumber);
	}

	return (
		<button type="button" className={`pagination-m__btn btn btn-secondary ${classActiveBtn}`} onClick={toThisPage} >{pageNumber}</button>
	)
}

export default PaginationItem;