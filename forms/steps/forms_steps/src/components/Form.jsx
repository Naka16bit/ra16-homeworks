import {useState} from "react";
import { nanoid } from 'nanoid';

function Form({onSubmit}) {
    const emptyForm = {
        date: "",
        distance: "",
    }
    const [form, setForm] = useState(emptyForm);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit ({
            id: nanoid(),
            date: form.date,
            distance: parseFloat(form.distance),
        });
        setForm(emptyForm);
    }

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setForm((prevForm) => ({...prevForm, [name]: value}));
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-date">
                <label htmlFor="date" >Дата (ДД.ММ.ГГ)</label>
                <input
                    id="date" 
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                />
            </div>
            <div className="form-distance">
                <label htmlFor="distance" >Пройдено км</label>
                <input
                    id="distance" 
                    name="distance"
                    value={form.distance}
                    onChange={handleChange}
                />
            </div>
            <button className="form-button" type="submit">OK</button>
        </form>
    );
}

export default Form;