import React, { useState, useRef } from "react";
import { v4 as uuid } from 'uuid';
import { Header, RadioWrapper, Radio, Table, Form } from './components';

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
  }

  const clickConditionHandler = (e) => {
    setTaskList(taskList.map((task) => {
      if (task.id === e.target.value) {
        return { ...task, condition: task.condition === '作業中' ? '完了' : '作業中' };
      } else {
        return task;
      }

    }))
  }

  const clickDeleteHandler = (e) => {
    setTaskList(taskList.filter((task) => task.id !== e.target.value));
  }

  const getViewTask = () => {
    if (filterCondition === "すべて") {
      return taskList;
    } else {
      return taskList.filter((task) => task.condition === filterCondition);
    }
  }

  return (
    <>
      <Header title="TODOアプリ" />
      <RadioWrapper>
        <Radio condition="すべて" filterCondition={filterCondition} setFilterCondition={setFilterCondition} />
        <Radio condition="作業中" filterCondition={filterCondition} setFilterCondition={setFilterCondition} />
        <Radio condition="完了" filterCondition={filterCondition} setFilterCondition={setFilterCondition} />
      </RadioWrapper>
      <Table getViewTask={getViewTask} clickConditionHandler={clickConditionHandler} clickDeleteHandler={clickDeleteHandler} />
      <Form inputRef={inputRef} clickAddHandler={(e) => { clickAddHandler(e) }} />
    </>
  );
}

export default App;