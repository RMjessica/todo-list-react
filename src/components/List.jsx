import React, { useState } from "react";

const List = (props) => {
	
	//set input value as data
	const [data, setdata] = useState("");

	//set validation
	const [validation, setValidation] = useState(true);

	//save value from the input(new task) in setData
	const myForm = (event) => {
		setdata(event.target.value);
	};

	//check data for spaces or empty string (validation)
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
		<div className="container-fluid text-center">
			<h1 className="text-center p-4">My tasks</h1>

			<form className="form" onSubmit={submit}>
				<div className="text-center mb-2">Add new task</div>
				<input
					className=""
					value={data}
					onChange={myForm}
				/>
				<div className="my-4">
					<button className="btn btn-outline-dark btn-sm">Add task</button>
				</div>

				{!validation && (
					<div className="validation text-danger"> You forgot to add your task</div>
				)}

			</form>
			<hr className=""></hr>
		</div>
	);
};

export default List;