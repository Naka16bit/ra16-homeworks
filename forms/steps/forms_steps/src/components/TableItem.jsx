function TableItem({item, onRemove}) {
    return (
        <div className="table-item">
            <span>{item.date}</span>
            <span>{item.distance}</span>
            <button onClick={() => onRemove(item.id)}>&#10008;</button>
        </div>
    );
}

export default TableItem;
