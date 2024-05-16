import Button from "../basics/Button";

const AddTaskForm = ({ inputRef, onClick }) => {
    return (
        <form>
            <input type='text' ref={inputRef} />
            <Button onClick={(e) => onClick(e)} text='追加' />
        </form>
    );
};

export default AddTaskForm;