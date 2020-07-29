import React, {FunctionComponent, ChangeEvent} from "react";

type InputTextAreaProps = {
    id?: string;
    input: string;
    label: string;
    handleChangeProp?:(event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const InputTextArea: FunctionComponent<InputTextAreaProps> = ({id,input,label, handleChangeProp}) => (
            <div className="input-container">
                <label htmlFor={id}>
                {label}:
                </label>
                <textarea name={id}
                value={input}
                onChange={handleChangeProp}/>
                <style jsx>{`
                    .input-container {
                        display: flex;
                        flex-direction: column;
                        padding: 0.5em;
                    }`
                    }
                </style>
            </div>
        )