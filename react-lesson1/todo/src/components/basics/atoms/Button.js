const Button = ({ value, onClick, children }) => {
    return (
        <button value={value} onClick={onClick}>{children}</button>
    );
};

export default Button;