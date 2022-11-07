import { Fragment, useEffect, useState } from "react"
import { Planet } from "./Planet";

export const Planets = () => {

    const [planets, setPlanets] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/planets')
            .then(res => res.json())
            .then(result => {
                setPlanets(result.results)
            });
    }, []);

    return (
        <Fragment>
            <h2>Planets:</h2>

            {!planets.length && <div>Loading...</div>}

            <ul>
                {planets.map(x => <Planet key={x.name} name={x.name} />)}
            </ul>

        </Fragment>
    )
}