import React from "react";
import {Layout} from '../components/Layout'
import SubstitutionContainer from "../components/SubstitutionContainer";
import VigenereCypher from "../services/VigenereCypher";
import {KeyDisplayTable} from "../components/KeyDisplayTable"

interface State {
    seed:string;
    cypher: VigenereCypher;
    label:string;
}


export default class Vigenere extends React.Component<{},State> {
    header = [];
    body = [];
    cypher = new VigenereCypher();
    constructor(props) {
        super(props);
        this.state = {
            seed: '',
            cypher: this.cypher,
            label: 'Vigenère Table'
        }
    }
        

    generateEncoding = (seed:string):void => {
        this.setState(
            {
                seed: seed.toUpperCase()
            }
            );
    }

    encrypt = (input:string, seed?:string):string => {
        input = input.replace(/\s/g, '');
        seed = seed.replace(/[^a-zA-Z]/g, '').toUpperCase(); 
        if(seed) {
            let rows = this.state.cypher.keyDisplayTable.rows;
            let newChar = input.charAt(input.length-1);
            let seedChar = seed.charAt((input.length-1) % seed.length);
            let row = rows[newChar.charCodeAt(0)-65];
            for(let i =0; i<row.length; i++){
                if(row[i].key.charAt(0) === seedChar){
                    row[i] = {key:row[i].key, 
                              value:row[i].value,
                              classNames: (row[i].classNames) ? row[i].classNames + " animate" : ''  
                            };
                }
            }
            this.setState({cypher: this.cypher})
            return this.cypher.encrypt(input,seed);
        }
        else {
            return this.cypher.encrypt(input,this.state.seed);
        }
        
    }

    decrypt = (input:string, seed?:string):string =>{
        if(seed) {
            return this.cypher.decrypt(input,seed);
        }
        else {
            return this.cypher.decrypt(input,this.state.seed);
        }
    }
    render() {
        return (
            <Layout title='Cypher|Vigenère'>
                <SubstitutionContainer 
                    type="vegenere"
                    heading="Vigenère"
                    upperCaseSeedOnly = {true}
                    encodeFn = {this.generateEncoding}
                    encryptFn = {this.encrypt}
                    decryptFn = {this.decrypt}>
                <div className="flex-container-row">
                    <div className="flex-container-col">
                        <p>
                            The Vigenère cipher uses a table where the available characters are shifted. A key seed is used in combination with
                            the plaintext to determine the cipher. More details can be found on &nbsp;
                            <a href="https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher" target="_blank"><i>Wikipedia</i></a>.
                        </p>
                        <p>
                            Input a seed key below using characters A-Z. The fields are case insensitive and all input and output is in all caps.
                            To decrypt a previously entered value, input the Key Seed and paste/enter the encrypted value in the output textbox.
                        </p>
                        <p>
                            The plaintext is encoded by using the key seed letter to determine the row on the table and the plaintext letter for the column.
                            The resulting junction is the cipher character. If the key seed is shorter than the plaintext, then it is repeated to construct a key
                            the same length as the plaintext input.
                        </p>
                    </div>
                    <KeyDisplayTable label={this.state.label} keyTable={this.state.cypher.keyDisplayTable}/>
                </div>
                </SubstitutionContainer>
                <style jsx>{`
            .flex-container-row {
                padding: 0 0.5rem;
                display: flex;
                flex-direction: row;
                height: 100%;
            }
            .flex-container-col {
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                height: 100%;
            }
            a {
                text-decoration: underline dotted;
                color:gray;
            }
            h1 {
                text-align: center;
            }
            p {
                text-align: left;
            }
            `}</style>
            </Layout>
        );
    }
}
