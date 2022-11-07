import { Character } from "./Character";
import { Fragment, useEffect, useState } from 'react';

export const CharacterList = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(result => {
                setCharacters(result.results);
            })
    }, []);

    return (

        <Fragment>
            <h2>Characters:</h2>

            {!characters.length && <div>Loading...</div>}

            <ul>
                {characters.map(x => <Character key={x.name} name={x.name} />)}
            </ul>

        </Fragment>


    )
}