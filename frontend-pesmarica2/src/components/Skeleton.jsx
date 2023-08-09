import React from "react";

const Skeleton = ({ length, variantLatest }) => {
	if (variantLatest === true) {
		return (
			<>
				{Array.from({ length }, (_, index) => (
					<li key={index} className="px-4 py-6 ">
						<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 animate-pulse max-w-[360px]" />
					</li>
				))}
			</>
		);
	} else {
		return (
			<>
				{Array.from({ length }, (_, index) => (
					<div key={index} className="px-4 py-6 mb-5 rounded-lg bg-slate-100">
						<div className="h-2.5 bg-gray-200  max-w-[360px] rounded-full dark:bg-gray-700 animate-pulse " />
					</div>
				))}
			</>
		);
	}
};

export default Skeleton;
