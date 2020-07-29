import React, {ChangeEvent} from "react";
import {InputTextArea} from "./InputTextArea";
import {SeedInput} from "./SeedInput";

interface Props {
    type: "simple"|"homophonic"|"vegenere";
    heading?:string,
    seed?:string,
    upperCaseSeedOnly:boolean,
    input?:string,
    output?:string,
    encodeFn: (seed:string) => void,
    encryptFn: (input:string, seed?:string)=> string,
    decryptFn: (input:string, seed?:string) => string
};

interface State {
    seed:string;
    input:string;
    output:string;
}

export default class SubstitutionContainer extends React.Component<Props,State> {
    constructor(props) {
        super(props);
        this.state =
            {
                seed: this.props.seed ? (this.props.upperCaseSeedOnly ? this.props.seed.toUpperCase(): this.props.seed) : '',
                input: this.props.input? this.props.input : '',
                output: this.props.output ? this.props.output : ''
            };
      }
      handleSeedChange=(event: ChangeEvent<HTMLInputElement>) => {
        let output = '';
        let input = '';
        const oldInput = this.state.input;
        const oldOutput = this.state.output;
        this.props.encodeFn((event.target.value));
        if (!(oldInput==='')) {
            output = this.props.encryptFn(oldInput, (event.target.value));
            input = oldInput;
        } else {
            if(!(oldOutput==='')) {
                input = this.props.encryptFn(oldOutput, (event.target.value));
                output = oldOutput;
            }
        }
        this.setState(
            {
                seed: this.props.upperCaseSeedOnly ? (event.target.value).toUpperCase() : (event.target.value),
                input: input,
                output: output
            }
           
        );
        
    }
    handleInputChange=(event: ChangeEvent<HTMLTextAreaElement>) => {
        let out = this.props.encryptFn((event.target.value).toUpperCase(),this.state.seed);
        this.setState(
            {
                seed: this.state.seed,
                input: (event.target.value).toUpperCase(),
                output: out
            }
            );
    }
    handleOutputChange=(event: ChangeEvent<HTMLTextAreaElement>) => {
        let input = '';
        (this.state.seed.length>0) ? input =this.props.decryptFn((event.target.value)) : input = '';
        this.setState(
            {
                seed: this.state.seed,
                input: input,
                output: (event.target.value)
            }
            );
    }
    render() {
        return (
        <div>
            {<h1>
                {this.props.heading ? this.props.heading : "Substitution"}
            </h1>}
            {this.props.children}
            <SeedInput label="Key Seed" input={this.state.seed} id="seed" handleChangeProp={this.handleSeedChange}/>
            <InputTextArea label="Input" input={this.state.input} id="input" handleChangeProp={this.handleInputChange}/>
            <InputTextArea label="Output" input={this.state.output} id="output" handleChangeProp={this.handleOutputChange}/>
            <style jsx>{`
            h1 {
                text-align: center;
            }
            `}</style>
        </div>    
        );
    }
}