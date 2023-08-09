const Pagination = ({ pages, currentPage, setCurrentPage }) => {
	return (
		<div className="mx-auto mt-12 max-w-screen-xl px-4 text-gray-600 md:px-8">
			<div className="flex items-center justify-between text-sm font-medium text-gray-600">
				<button
					onClick={() => {
						setCurrentPage(
							currentPage - 1 === 0 || currentPage - 1 < 0 ? 1 : currentPage - 1
						);
					}}
					className="rounded-lg border px-4 py-2 duration-150 hover:bg-indigo-600 hover:text-white"
				>
					Previous
				</button>
				<div>
					Page {currentPage} of {pages}
				</div>
				<button
					onClick={() => {
						setCurrentPage(currentPage + 1 > pages ? pages : currentPage + 1);
					}}
					className="rounded-lg border px-4 py-2 duration-150 hover:bg-indigo-600 hover:text-white"
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Pagination;
