import React, { useState } from "react";

//create your first component
const List = (props) => {
	const [data, setdata] = useState("");
	const [validation, setValidation] = useState(true);

	const myForm = (event) => {
		setdata(event.target.value);
	};

	const submit = (event) => {
		event.preventDefault();
		if (data.trim() !== "") {
			props.newTask(data);
			setdata("");
			setValidation(true);
		} else {
			setValidation(false);
		}
	};

	return (
		<div className="container-fluid">
			<h1 className="text-center p-4">My tasks</h1>

			<form className="form " onSubmit={submit}>
				<div className="p-3">Add new task</div>
				<input
					className=""
					value={data}
					onChange={myForm}
				/>
				<div className="my-3">
					<button className="btn btn-outline-dark">Add task</button>
				</div>

				{!validation && (
					<div className="validation"> You forgot to add your task</div>
				)}

			</form>

		</div>
	);
};

export default List;