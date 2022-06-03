import React from "react";

const Task = (props) => {
	return (
		<div>
			<div className="task">
				<span>{props.task}</span>
				<span
					onClick={() => {
						props.del(props.id);
					}}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-x"
						width="36"
						height="36"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="#000000"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				</span>
			</div>
		</div>
	);
};

export default Task;