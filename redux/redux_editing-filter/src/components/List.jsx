import {useSelector, useDispatch} from 'react-redux';
import {inputCreate, removeService, listCreate, editService, clearForm, editList, searchList} from "../redux/actions";

function List() {
    const dispatch = useDispatch();
    const items = useSelector(state => state.list);

    const handleRemove = (idToRemove) => {
        dispatch(removeService(idToRemove));
    }

    const handleEdit = (text, price, id) => {
        dispatch(editService(text, price, id));
    }

    return (
        <ul>
            {items.map(({id, text, price}) => 
            <li key={id}> 
                {text} {price} руб. <button onClick={() => handleEdit(text, price, id)}>&#9998;</button>
                <button onClick={() => handleRemove(id)}>&#10006;</button>
            </li>)}
        </ul>
    )
}

export default List;
