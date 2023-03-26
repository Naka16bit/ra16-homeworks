import {useSelector, useDispatch} from 'react-redux'
import {inputCreate, removeService, listCreate, editService, clearForm, editList, searchList} from "../redux/actions";

function Form() {
    const dispatch = useDispatch();
    const text = useSelector(state => state.input);
    console.log(text);

    const handleChange=({target}) => {
        const {name, value} = target;
        dispatch(inputCreate(name, value));
        if (name === "search") {
            dispatch(searchList(value));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        text.id ?
            dispatch(editList(text?.id, text?.text, text?.price)) :
            dispatch(listCreate(text?.text, text?.price));
        dispatch(clearForm());
    }

    const handleReset = () => {
        dispatch(clearForm());
    }

    return(
        <div>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <input 
                    type="text"
                    value={text.text}
                    onChange={handleChange}
                    name="text"
                    required={true} 
                    placeholder={"Услуга"}/>
                <input 
                    type="number"
                    value={text.price}
                    onChange={handleChange} 
                    name="price"
                    required={true} 
                    placeholder={"Стоимость"}/>
                <button type={"submit"}>Save</button>
                <button  type={"reset"}>Cancel</button>
            </form>
            <br/>
            <input 
                type="text"
                value={text.search}
                onChange={handleChange}
                name="search"
                placeholder={"Поиск"}/>
        </div>
        
    );
};

export default Form;
