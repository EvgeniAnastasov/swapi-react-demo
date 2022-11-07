import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="starships">Starships</Link></li>
                <li><Link to="/characters">Characters</Link></li>
                <li><Link to="/films">Films</Link></li>
                <li><Link to="/planets">Planets</Link></li>
            </ul>
        </nav>
    )
}