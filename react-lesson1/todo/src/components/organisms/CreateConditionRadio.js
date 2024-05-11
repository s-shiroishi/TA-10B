import Radio from "../basics/molecules/Radio";

const CreateConditionRadio = ({ filterCondition, setFilterCondition }) => {
    return (
        <div>
            <Radio id='すべて' name='condition' value='すべて' changeHandler={setFilterCondition} checked={filterCondition} />
            <Radio id='作業中' name='condition' value='作業中' changeHandler={setFilterCondition} checked={filterCondition} />
            <Radio id='完了' name='condition' value='完了' changeHandler={setFilterCondition} checked={filterCondition} />
        </div>
    );
};

export default CreateConditionRadio;