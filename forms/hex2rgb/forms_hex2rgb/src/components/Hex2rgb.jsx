import { useState } from "react";

export default function Hex2rgb() {
    const body = document.querySelector("body");
    const [hex, setHex] = useState("#123456");
    const [rgb, setRgb] = useState("rgb(18, 52, 86)");

    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    const handleColorConvert = (evt) => {
        const {value} = evt.target;
        setHex(value);

        if (value.length === 7) {
            const convertedValue = hexToRgb(value);
            if (convertedValue) {
                body.style.backgroundColor = value;
                setRgb(convertedValue);
            } else {
                body.style.backgroundColor = "#E94B35";
                setRgb("Ошибка!");
            }
        }

        if (value.length > 7) {
            body.style.backgroundColor = "#E94B35";
            setRgb("Ошибка!");
        }
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <input
                    className="hex"
                    name="hex"
                    value={hex}
                    onChange={handleColorConvert}
                />
            </form>
            <div className="rgb">
                <span>{rgb}</span>
            </div>
        </div>
    )
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? (
        `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
    ) : null;
}
