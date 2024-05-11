import Input from "../basics/atoms/Input";
import Button from "../basics/atoms/Button";

const CreateTaskForm = ({ inputRef, clickAddHandler }) => {
    return (
        <form>
            <Input type='text' ref={inputRef} />
            <Button onClick={(e) => clickAddHandler(e)}>追加</Button>
        </form>
    );
};

export default CreateTaskForm;