
function Button({title, onClick, style}) {
    return(
        <button onClick={onClick} className={style}>{title}</button>
    );
}

export default Button;