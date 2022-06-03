import React, { useState } from "react";

//create your first component
const List = (props) => {
	const [inputText, setInputText] = useState("");
	const [validacion, setValidacion] = useState(true);

	const manejarFormulario = (event) => {
		setInputText(event.target.value);
	};

	const submit = (event) => {
		event.preventDefault();
		if (inputText.trim() !== "") {
			props.newTask(inputText);
			setInputText("");
			setValidacion(true);
		} else {
			setValidacion(false);
		}
	};

	return (
		<div className="container-fluid">
			<h1 className="text-center">TODO LIST</h1>
			<form className="form" onSubmit={submit}>
				<span>Add new task</span>
				<input
					className="mb-2"
					value={inputText}
					onChange={manejarFormulario}
				/>
				<button>Guardar</button>
			</form>

			{!validacion && (
				<div className="validacion"> Please, add a task </div>
			)}
		</div>
	);
};

export default List;