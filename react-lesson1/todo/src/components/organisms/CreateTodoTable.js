import TableBody from "../basics/molecules/TableBody";
import TodoTableHeader from "./TodoTableHeader";
import TaskRow from "./TaskRow";

const CreateTodoTable = ({ getViewTask, clickConditionHandler, clickDeleteHandler }) => {
    return (
        <table>
            <TodoTableHeader />
            <TableBody>
                {getViewTask().map((task, id) => (
                    <TaskRow
                        key={task.id}
                        task={task}
                        id={id}
                        clickConditionHandler={clickConditionHandler}
                        clickDeleteHandler={clickDeleteHandler}
                    />
                ))}
            </TableBody>
        </table>
    );
};

export default CreateTodoTable;