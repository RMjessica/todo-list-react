//include images into your bundle
import React, { useState } from "react";
import TaskList from "./List.jsx";
import Task from "./Task.jsx";


//create your first component
const Home = () => {
	const [taskList, setTaskList] = useState([]);

	const newTask = (task) => {
		setTaskList([task, ...taskList]); //Operador spreat (...)
	};

	const del = (id) => {
		const filterTask = taskList.filter((e, index) => index !== id);
		setTaskList(filterTask);
	};

	return (
		<div className="container-fluid">
			<TaskList newTask={newTask} />

			<div className="taskList">
				{taskList.map((e, index) => (
					<Task key={index} task={e} del={del} id={index} />
				))}
			</div>
		</div>
	);
};

export default Home;