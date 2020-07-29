import React from "react";
import SubstitutionCypher from "../../services/SubstitutionCypher";
import {Layout} from "../../components/Layout"
import {KeyDisplayTable} from "../../components/KeyDisplayTable";
import SubstitutionContainer from "../../components/SubstitutionContainer";


export default class Simple extends React.Component<{},{key:SubstitutionCypher}> {
    constructor(props) {
        super(props);
        this.state = {
                        key: new SubstitutionCypher()
                    };
    }

    generateEncoding = (seed:string):void => {
        this.state.key.generateEncoding(seed.toUpperCase());
        this.setState(
            {key: this.state.key}
        );
    }

    encrypt = (input:string):string => {
        return this.state.key.encrypt(input);
    }

    decrypt = (input:string):string =>{
        return this.state.key.decrypt(input);
    }


    render() {
        return (
        <Layout title='Cypher|Simple Substitution'>
            <SubstitutionContainer 
            type="simple"
            heading="Simple Substitution"
            upperCaseSeedOnly = {true}
            encodeFn = {this.generateEncoding}
            encryptFn = {this.encrypt}
            decryptFn = {this.decrypt}>
                <p>
                    A basic substitution cypher substitutes one character for another to create an encoded value.
                    Further details on the functionality can be found on &nbsp;
                    <a href="https://en.wikipedia.org/wiki/Substitution_cipher#Simple_substitution" target="_blank">Wikipedia</a>.
                </p>
                <p>
                    Input a seed key below using characters A-Z. The fields are case insensitive and all input and output is in all caps.
                    To decrypt a previously entered value, input the Key Seed and paste/enter the encrypted value in the output textbox.
                </p>
                <KeyDisplayTable label="Key Mapping" 
                                keyTable={this.state.key.keyDisplayTable}
                                header1="Plaintext"
                                header2="Ciphertext"/>
            </SubstitutionContainer>
            <style jsx>{`
            h1 {
                text-align: center;
            }
            a {
                text-decoration: underline dotted;
                color:gray;
            }
            `}</style>
        </Layout>    
        );
    }
}
