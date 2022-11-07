import { Fragment, useEffect, useState } from "react"
import { Film } from "./Film"

export const Films = () => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/films')
            .then(res => res.json())
            .then(result => {
                setFilms(result.results)
            })
    }, [])

    return (
        <Fragment>
            <h2>Films:</h2>

            {!films.length && <div>Loading...</div>}

            <ul>
                {films.map(x => <Film key={x.title} title={x.title} />)}
            </ul>

        </Fragment>
    )
}