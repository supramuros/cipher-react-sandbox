import React from "react";
import HomophonicSubstitutionCypher from "../services/HomophonicSubstitutionCypher";
import {Layout} from "../components/Layout"
import {KeyDisplayTable} from "../components/KeyDisplayTable";
import SubstitutionContainer from "../components/SubstitutionContainer";


export default class Homophonic extends React.Component<{},{key:HomophonicSubstitutionCypher}> {
    constructor(props) {
        super(props);
        this.state = {
                        key: new HomophonicSubstitutionCypher()
                    };
    }

    generateEncoding = (seed:string):void => {
        this.state.key.generateEncoding(seed);
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
        <Layout title='Cypher|Homophonic Substitution'>
            <SubstitutionContainer 
            type="homophonic"
            heading="Homophonic Substitution"
            upperCaseSeedOnly = {false}
            encodeFn = {this.generateEncoding}
            encryptFn = {this.encrypt}
            decryptFn = {this.decrypt}>
                <p>
                            A homophonic substitution cypher expands on a simple substitution and includes multiple mappings for characters (E encoded to F,O,5 for example).
                            The goal is to hide higher frequency characters (e.g. E) from easily being seen in messages. The Homophonic Substitution below encodes multiple
                            characters for A, E, H, I, N, O, R, S, and T. Encoded characters expand to include numbers and lower case letters.
                        </p>
                        <p>
                            Further details on the functionality can be found on &nbsp;
                            <a href="https://en.wikipedia.org/wiki/Substitution_cipher#Homophonic_substitution" target="_blank"><i>Wikipedia</i></a>.
                        </p>
                <div className="flex-container-row">
                    <div className="flex-container-col">
                        
                        <p>
                            Enter a seed below. Be sure to use a mixture of A-Z, a-z, 0-9 and a relatively long phrase. The seed is constructed using a simple substitution:
                        </p>
                        <ul>
                            <li>A,E,H,I,N,O,R,S,T are encoded first.</li>
                            <li>A,E,H,I,N,O,R,S,T are encoded a second time.</li>
                            <li>A,E,H,I,N,O,R,S,T are encoded a final time.</li>
                            <li>Remaining characters A-Z are encoded to the remaining values in the A-Z, a-z, 0-9 range.</li>
                        </ul>
                        <p>
                            To decrypt a previously entered value, input the Key Seed value and paste/enter the encrypted value in the output textbox.
                        </p>
                    </div>
                    <KeyDisplayTable label="Key Mapping" 
                                keyTable={this.state.key.keyDisplayTable}
                                header1="Plaintext"
                                header2="Ciphertext"/>
                </div>
            </SubstitutionContainer>
            <style jsx>{`
            h1 {
                text-align: center;
            }
            p {
                margin:0.5em;
            }
            li {
                margin:0;
            }
            ul {
                margin:0;
            }
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
            `}</style>
        </Layout>    
        );
    }
}