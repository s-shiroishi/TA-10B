import TaskRow from "./TaskRow";

const TaskTable = ({ getViewTask, onClick }) => {
    return (
        <table>
            <thead>
                <th>Id</th>
                <th>コメント</th>
                <th>状態</th>
                <th>操作</th>
            </thead>
            <tbody>
                {getViewTask().map((task, id) => (
                    <TaskRow
                        key={task.id}
                        task={task}
                        id={id}
                        onClick={onClick}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default TaskTable;