function Toolbar({filters, selected, onSelectFilter}) {

    return (
        <div className='toolbar'>
            {filters.map((item) => (
                <button className={item === selected ? 'active' : ''} key={item} onClick={onSelectFilter}>
                    {item}
                </button>
            ))}
        </div>
    );
}

export default Toolbar;
