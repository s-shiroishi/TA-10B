export const Header = ({ title }) => {
    return (<h1>{title}</h1>);
};

export const RadioWrapper = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export const Radio = ({ condition, filterCondition, setFilterCondition }) => {
    return (
        <>
            <input type="radio" id={condition} name="condition" value={condition} onChange={(e) => { setFilterCondition(e.target.value) }} checked={filterCondition === condition}></input>
            <label for={condition}>{condition}</label>
        </>
    )
}

const TaskRow = ({ task, id, clickConditionHandler, clickDeleteHandler }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{task.comment}</td>
            <td><button value={task.id} onClick={(e) => clickConditionHandler(e)}>{task.condition}</button></td>
            <td><button value={task.id} onClick={(e) => clickDeleteHandler(e)}>削除</button></td>
        </tr>
    );
};

export const Table = ({ getViewTask, clickConditionHandler, clickDeleteHandler }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>コメント</th>
                    <th>状態</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {getViewTask().map((task, id) => (
                    <TaskRow key={task.id} task={task} id={id} clickConditionHandler={clickConditionHandler} clickDeleteHandler={clickDeleteHandler} />
                ))}
            </tbody>
        </table>
    );
};

export const Form = ({ inputRef, clickAddHandler }) => {
    return (
        <form>
            <input type="text" ref={inputRef}></input>
            <button onClick={clickAddHandler}>追加</button>
        </form>
    )
}

