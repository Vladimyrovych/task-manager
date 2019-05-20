import React from 'react';
import './Pagination.scss';
import PaginationItem from '../paginationItem/PaginationItem';

const Pagination = ({pageCount, currentPage, toPage}) => {
	const toPreviousPages = () => {
		toPage(currentPage - 3);
	}
	const toNextPages = () => {
		toPage(currentPage + 3);
	}

	let previousPages = <button type="button" className={`pagination-m__btn btn btn-secondary`} >{'<<'}</button>
	
	let nextPages = <button type="button" className={`pagination-m__btn btn btn-secondary`} >{'>>'}</button>

	if (currentPage > 2) {
		previousPages = <button type="button" className={`pagination-m__btn btn btn-secondary`} onClick={toPreviousPages} >{'<<'}</button>
	} else {
		previousPages = <button type="button" className={`pagination-m__btn btn btn-secondary`} >{'<<'}</button>
	}

	if (currentPage < (pageCount - 1)) {
		nextPages = <button type="button" className={`pagination-m__btn btn btn-secondary`} onClick={toNextPages} >{'>>'}</button>
	} else {
		nextPages = <button type="button" className={`pagination-m__btn btn btn-secondary`} >{'>>'}</button>
	}

	const pages = [];
	
	if (currentPage > 1 && currentPage < (pageCount)) {
		pages.push(<PaginationItem pageNumber={currentPage - 1} toPage={toPage} />)
		pages.push(<PaginationItem pageNumber={currentPage} isCurrentPage={true} toPage={toPage} />)
		pages.push(<PaginationItem pageNumber={currentPage + 1} toPage={toPage} />)
	} 
	if (currentPage === 1) {
		pages.push(<PaginationItem pageNumber={currentPage} isCurrentPage={true} toPage={toPage} />)
		pages.push(<PaginationItem pageNumber={currentPage + 1} toPage={toPage} />)
	}
	if (currentPage === pageCount) {
		pages.push(<PaginationItem pageNumber={currentPage - 1} toPage={toPage} />)
		pages.push(<PaginationItem pageNumber={currentPage} isCurrentPage={true} toPage={toPage} />)
	}

	return (
		<div className="app__pagination pagination-m btn-group mr-2" role="group" aria-label="First group">
			{previousPages}
			{pages}
			{nextPages}
		</div>
	)
}

export default Pagination;