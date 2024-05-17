import Button from "../basics/Button";

const TaskRow = ({ task, id, onClick }) => (
    <tr>
        <td>{id}</td>
        <td>{task.comment}</td>
        <td>
            <Button value={task.id} onClick={(e) => onClick.condition(e)} text={task.condition} />
        </td>
        <td>
            <Button value={task.id} onClick={(e) => onClick.delete(e)} text='削除'></Button>
        </td>
    </tr>
);

export default TaskRow;