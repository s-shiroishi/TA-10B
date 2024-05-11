import TableData from "../basics/atoms/TableData";
import Button from "../basics/atoms/Button";
import TableRow from "../basics/molecules/TableRow";

const TaskRow = ({ task, id, clickConditionHandler, clickDeleteHandler }) => (
    <TableRow key={task.id}>
        <TableData>{id}</TableData>
        <TableData>{task.comment}</TableData>
        <TableData>
            <Button value={task.id} onClick={(e) => clickConditionHandler(e)}>{task.condition}</Button>
        </TableData>
        <TableData>
            <Button value={task.id} onClick={(e) => clickDeleteHandler(e)}>削除</Button>
        </TableData>
    </TableRow>
);

export default TaskRow;