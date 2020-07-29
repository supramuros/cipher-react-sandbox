import React, {Component} from "react";
import {ILetterMap, LetterMap} from "./LetterMap";

interface Props {
    letterSet: ILetterMap[];
}
export default class EncodeSet extends Component<{letterSet:ILetterMap[]},{}> {
    constructor(props) {
        super(props);
    }    

    render() {
        return (
            <div>
                { this.props.letterSet.map(key => (
                    <LetterMap letterMap={key} />
                ))
                }
                <style jsx>{`
                    .flex-container {
                        display: flex;
                        flex-direction: column;
                    }`
                    }
                </style>
            </div>
        );
    }
}