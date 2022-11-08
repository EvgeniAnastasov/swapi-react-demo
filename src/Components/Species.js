import { useEffect, useState } from "react"
import {SpeciesItem} from './SpeciesItem'

export const Species = () => {
    const [species, setSpecies] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/species')
        .then(res => res.json())
        .then(result => {
            setSpecies(result.results)
        });

    }, [])
    return(
        <>
        <h2>Species...</h2>
        {!species.length && <div>Loading...</div>}
        <ul>
            {species.map(x => <SpeciesItem key={x.name} name={x.name}/>)}
        </ul>
        </>

    )
}