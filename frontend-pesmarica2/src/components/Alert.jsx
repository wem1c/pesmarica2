import React from "react";

const Alert = ({ variant, message }) => {
	return (
		<div
			className={`p-4 mb-4 rounded-lg text-lg ${
				variant === "error"
					? "text-red-800 bg-red-100"
					: variant === "info"
					? "text-blue-800 bg-blue-50"
					: ""
			}`}
			role="alert"
		>
			{message}
		</div>
	);
};

export default Alert;
