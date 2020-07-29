import React, {FunctionComponent, ChangeEvent} from "react";

type KeyDisplayProps = {
    id?: string;
    label: string;
    keyMap: Map<string,string>;
}

export const KeyDisplay: FunctionComponent<KeyDisplayProps> = (KeyDisplayProps) => {
    let keyValues = [];
    let valueValues = [];
    let kvValues = [];
    KeyDisplayProps.keyMap.forEach((v,k)=> {
        keyValues.push(<li key={k}>{k}</li>);
        valueValues.push(<li key={k}>{v}</li>);
        kvValues.push(<li key={k} className="vertical">{k}{v}</li>);
    });
    return (
        <div className="key-display">
               <h3 id={KeyDisplayProps.id}>{KeyDisplayProps.label}</h3>
               <div className="flex-row">
                   <div className="flex-column">
                       <label>Plaintext:</label>
                       <label>Cyphertext:</label>
                   </div>
                   <div className="flex-column">
                    <ul>
                        {keyValues}
                    </ul>
                    <ul>
                        {valueValues}
                    </ul>
                    </div>
               </div>
               <style jsx>{`
                    .key-display {
                        display: flex;
                        flex-direction: column;
                    }
                    .flex-row {
                        display:flex;
                        flex-direction: row;
                    }
                    .flex-column {
                        display:flex;
                        flex-direction: column;
                    }
                    h3{
                        margin:0;
                    }
                    ul{
                        list-style: none;
                        margin: 0;
                        padding: 0;
                        display: flex;
                    }
                    label{
                        text-align: end;
                        padding: 0 1em 0 0;
                    }
                    `
                    }
               </style>
               <style jsx global>{`
                    .vertical {
                        writing-mode: vertical-rl;
                        text-orientation: upright;
                    }
                `}</style>
            </div>
    )
}