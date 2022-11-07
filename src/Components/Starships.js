import { Starship } from "./Starshup"
import { Fragment, useEffect, useState } from 'react';


export const Starships = () => {

    const [starships, setStarships] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/starships')
            .then(res => res.json())
            .then(result => {
                setStarships(result.results);

            })
    }, []);

    return (
        <Fragment>
            <h2>Starships:</h2>

            {!starships.length && <div>Loading...</div>}

            <ul>
                {starships.map(x => <Starship key={x.name} name={x.name} />)}
            </ul>
        </Fragment>

    )
}