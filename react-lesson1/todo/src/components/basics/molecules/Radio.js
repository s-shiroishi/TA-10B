import Input from "../atoms/Input";
import Label from "../atoms/Label";

const Radio = ({ id, name, value, changeHandler, checked }) => {
    return (
        <>
            <Input type="radio" id={id} name={name} value={value} onChange={(e) => changeHandler(e.target.value)} checked={checked === value}></Input>
            <Label htmlFor={id}>{value}</Label>
        </>
    );
};

export default Radio;