function IconSwitch({icon, onSwitch}) {
    return (
        <header className="header">
            <button className='material-icons' onClick={onSwitch}>{icon}</button>
        </header>
    )
}

export default IconSwitch;
