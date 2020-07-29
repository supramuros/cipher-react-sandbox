import React, {FunctionComponent, ChangeEvent} from "react";

type SeedInputProps = {
    id?: string;
    input: string;
    label: string;
    handleChangeProp?:(event: ChangeEvent<HTMLInputElement>) => void;
}

export const SeedInput: FunctionComponent<SeedInputProps> = ({id,input,label, handleChangeProp}) => (
            <div className="seed-input">
                <label htmlFor={id}>
                {label}:
                </label>
                <input name={id}
                value={input}
                onChange={handleChangeProp}/>
                <style jsx>{`
                    .seed-input {
                        display: flex;
                        flex-direction: column;
                        padding: 0.5em;
                    }`
                    }
                </style>
            </div>
        )