const Button = ({ value, onClick, text }) => {
    return (
        <button value={value} onClick={onClick}>{text}</button>
    );
};

export default Button;