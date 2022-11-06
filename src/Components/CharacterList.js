import { CharacterItem } from "./CharacterItem"

export const CharacterList = ({characters}) => {


    return (
        <ul>
            {characters.map(x => <CharacterItem key={x.name} name={x.name} />)}
        </ul>
    )
}