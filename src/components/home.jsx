import React, { useState } from "react";
import TaskList from "./List.jsx";
import Task from "./Task.jsx";


//create your first component
const Home = () => {

	//set list of tasks
	const [taskList, setTaskList] = useState([]);

	//every new task will go in an array of tasks
	const newTask = (task) => {
		setTaskList([task, ...taskList]); 
	};

	//delete task function
	const del = (id) => {
		const filterTask = taskList.filter((e, index) => index !== id);
		setTaskList(filterTask);
	};

	//return a task list with the new task
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