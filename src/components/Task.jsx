import React from "react";
import { IoTrashSharp } from "react-icons/io5";

const Task = (props) => {
	return (
		<div>
			<div className="text-center task pb-3">
				<span>{props.task}</span>
				<span
					onClick={() => {
						props.del(props.id);
					}}>
					<IoTrashSharp className="ms-2"/>
				</span>
			</div>
		</div>
	);
};

export default Task;