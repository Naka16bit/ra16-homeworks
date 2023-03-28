import {useSelector, useDispatch} from 'react-redux'
import {inputValue} from '../redux_toolkit/slices/facts';


function Facts() {
    const dispatch = useDispatch();
    const {facts, amount} = useSelector(state => state.facts);

    return(
        <div>
            <h2>Факты о фильме</h2>
            <div className="amount-input">
                <input 
                    type="number"
                    min="1"
                    max="5"
                    onChange={({target: {value}}) => dispatch(inputValue(value))} 
                    name="amount"
                    placeholder={"Количество (от 1 до 5)"}/>
            </div>
            <ul className="facts-list">
                {facts.slice(0, amount).map(({id, text}) => 
                    <li key={id}> 
                        {text} 
                    </li>)}
            </ul>
        </div>
    );
};

export default Facts;
