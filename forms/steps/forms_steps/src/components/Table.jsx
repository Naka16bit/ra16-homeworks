import TableItem from "./TableItem";

function Table({trainings, onRemove}) {
    return (
        <div className="table">
            <div className="table-header">
                <span>Дата (ДД.ММ.ГГ)</span>
                <span>Пройдено км</span>
                <span>Действия</span>
            </div>
            <div className="table-items">
                {trainings.map((training) => (
                    <TableItem key={training.id} item={training} onRemove={onRemove}/>
                ))}
            </div>
        </div>
    );
}

export default Table;
