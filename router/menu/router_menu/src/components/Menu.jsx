import {NavLink} from 'react-router-dom';

function Menu() {
    const setActive = ({ isActive }) =>
        isActive ? "menu__item menu__item-active " : "menu__item";

    return (
        <nav className="menu">
                <NavLink to="/" className={setActive}>
                    Главная
                </NavLink>
                <NavLink to="/drift" className={setActive}>
                    Дрифт-такси
                </NavLink>
                <NavLink to="/timeattack" className={setActive}>
                    Time Attack
                </NavLink>
                <NavLink to="/forza" className={setActive}>
                    Forza Karting
                </NavLink>
        </nav>
    );
}

export default Menu;
