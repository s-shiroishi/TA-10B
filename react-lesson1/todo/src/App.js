import React, { useState, useRef } from "react";
import { v4 as uuid } from 'uuid';
import Title from "./components/basics/Title";
import RadioGroup from "./components/organisms/RadioGroup";
import TaskTable from "./components/organisms/TaskTable";
import AddTaskForm from "./components/organisms/AddTaskForm";



function App() {
  const inputRef = useRef('');
  const [taskList, setTaskList] = useState([]);
  const [filterCondition, setFilterCondition] = useState('すべて');

  const clickAddHandler = (e) => {
    e.preventDefault();
    const newTaskList = [...taskList];
    newTaskList.push({ id: uuid(), comment: inputRef.current.value, condition: '作業中' });
    setTaskList(newTaskList);
    inputRef.current.value = '';
  };

  const clickConditionHandler = (e) => {
    setTaskList(taskList.map((task) => {
      if (task.id === e.target.value) {
        return { ...task, condition: task.condition === '作業中' ? '完了' : '作業中' };
      } else {
        return task;
      };

    }));
  };

  const clickDeleteHandler = (e) => {
    setTaskList(taskList.filter((task) => task.id !== e.target.value));
  };

  const getViewTask = () => {
    if (filterCondition === "すべて") {
      return taskList;
    } else {
      return taskList.filter((task) => task.condition === filterCondition);
    };
  };

  return (
    <>
      <Title title='Todoアプリ' />
      <RadioGroup filterCondition={filterCondition} setFilterCondition={setFilterCondition} />
      <TaskTable getViewTask={getViewTask} onClick={{ condition: clickConditionHandler, delete: clickDeleteHandler }} />
      <AddTaskForm inputRef={inputRef} onClick={clickAddHandler} />
    </>
  );
};

export default App;