const ConditionRadioGroup = ({ filterCondition, setFilterCondition }) => {
    const conditions = ['すべて', '作業中', '完了'];
    return (
        <div>
            {conditions.map((condition) => (
                <label>
                    <input type="radio" name='condtion' value={condition} onChange={(e) => setFilterCondition(e.target.value)} checked={filterCondition === condition} />
                    {condition}
                </label>
            ))}
        </div>
    );
};

export default ConditionRadioGroup;