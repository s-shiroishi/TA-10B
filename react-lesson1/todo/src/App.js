import React, { useState, useRef } from "react";
import { v4 as uuid } from 'uuid';
import Header1 from "./components/basics/atoms/Header1";
import AppHeader from "./components/basics/molecules/AppHeader";
import CreateConditionRadio from "./components/organisms/CreateConditionRadio";
import CreateTodoTable from "./components/organisms/CreateTodoTable";
import CreateTaskForm from "./components/organisms/CreateTaskForm";


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
      <AppHeader>
        <Header1>TODOアプリ</Header1>
      </AppHeader>
      <CreateConditionRadio filterCondition={filterCondition} setFilterCondition={setFilterCondition} />
      <CreateTodoTable getViewTask={getViewTask} clickConditionHandler={clickConditionHandler} clickDeleteHandler={clickDeleteHandler} />
      <CreateTaskForm inputRef={inputRef} clickAddHandler={clickAddHandler} />
    </>
  );
};

export default App;