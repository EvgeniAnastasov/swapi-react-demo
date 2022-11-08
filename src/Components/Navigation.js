import { NavLink } from "react-router-dom"
import styles from './Navigation.module.css'

export function Navigation() {

    const setStyle = ({ isActive }) => {

        return isActive
            ? styles['active']
            : undefined;
    }

    return (
        <nav>
            <ul>
                <li><NavLink className={setStyle} to="/" >Home</NavLink></li>
                <li><NavLink className={setStyle} to="starships" >Starships</NavLink></li>
                <li><NavLink className={setStyle} to="/characters" >Characters</NavLink></li>
                <li><NavLink className={setStyle} to="/films" >Films</NavLink></li>
                <li><NavLink className={setStyle} to="/planets" >Planets</NavLink></li>
                <li><NavLink className={setStyle} to="/species" >Species</NavLink></li>
            </ul>
        </nav>
    )
}