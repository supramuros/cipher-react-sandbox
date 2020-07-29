import {keyDisplayTable} from "../models/key";

export interface IKeyMap{
    keyMap:Map<string,string>;
}

export default interface ICypher{
    encrypt(input:string, key?:Map<string,string>):string;
    decrypt(input:string, key?:Map<string,string>):string;
}

export interface SubCypher{
    name:string;
    keyDisplayTable:keyDisplayTable;
    //encodeMap includes the plaintext value as the key and an array of the encoded values
    //Example: A -> D,Z; Then the plaintext A can be encoded as D or Z
    encodeMap:Map<string,string[]>;
    //With the input of the seed string, generates the encodeMap for the cypher
    generateEncoding(seed?:string):void;
    //using the encodeMap and unencoded value, generates the encoded cypher and returns it as a string
    encrypt(input:string):string;
    //uses the encodeMap and encoded value to generate the plaintext
    decrypt(input:string):string;
}