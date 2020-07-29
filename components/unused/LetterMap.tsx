import React, {FunctionComponent} from "react";

export interface ILetterMap {
    letter:string;
    map: string;
}

interface Props {
    letterMap: ILetterMap;
}


export const LetterMap: FunctionComponent<Props> = ({letterMap}) => {
    
    return (
        <h3>{letterMap.letter} - {letterMap.map}</h3>
    );
}