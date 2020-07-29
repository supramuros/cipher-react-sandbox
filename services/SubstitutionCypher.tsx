import SubCypher from "./ICypher";
import {keyDisplayTable, td} from "../models/key";

export default class SubstitutionCypher implements SubCypher {
    name='Homophonic';
    encodeMap:Map<string,string[]> = new Map();
    decodeMap:Map<string,string> = new Map();
    keyDisplayTable:keyDisplayTable;
    constructor(){
    }

    encrypt(input:string):string{
        const blocksize = 5;
        if(this.encodeMap.size>0){
            return this.generateOutputFromKey(input, blocksize);
        }
        return input;
    }

    decrypt(input:string):string{
        const decryptKey = new Map();
        const blocksize = 5;
            return this.generateInputFromKey(input);
    }

    protected generateOutputFromKey(input:string,block?:number): string{
        let c = 1;
        let out = '';
        let key = this.encodeMap;
        input = input.replace(/\s/g, '');
        for(let i=0; i<input.length; i++){
            if(key.get(input.charAt(i))){
                out=out+key.get(input.charAt(i))[0];
            }
            else out=out+input.charAt(i);

            if(block && c % block === 0){
                out=out+' ';
            }
            c++;
        }
        
        while (block && c % block !== 1) {
            out = out + String.fromCharCode(65+Math.floor(Math.random() * 26));
            c++;
        }
        return out;
    }
    protected generateInputFromKey(input:string): string{
        let c = 1;
        let out = '';
        input = input.replace(/\s/g, '');
        for(let i=0; i<input.length; i++){
            if(this.decodeMap.get(input.charAt(i))){
                out=out+this.decodeMap.get(input.charAt(i));
            }
            else out=out+input.charAt(i);
        }
        return out;
    }
    
    generateEncoding(seed?:string):void{
        const keyMap:Map<string,string[]> = new Map();
        const usedValues:Set<string> = new Set();
        seed = seed.replace(/[^a-zA-Z]/g, '').toUpperCase();
        for(let i = 0; i<seed.length; i++){
                if(!usedValues.has(seed.charAt(i))){
                    keyMap.set(String.fromCharCode(keyMap.size+65),[seed.charAt(i)]);
                    usedValues.add(seed.charAt(i));
                }
            }
        for(let i = 65; i<65+26; i++){
            if(!usedValues.has(String.fromCharCode(i))){
                keyMap.set(String.fromCharCode(keyMap.size+65), [String.fromCharCode(i)]);
            }
        }   
        this.encodeMap = keyMap;
        this.generateDecoding(keyMap);
        this.generateKeyTableDisplay(keyMap);
    }
    protected generateDecoding(encode:Map<string,string[]>):void{
        const decodeMap:Map<string,string> = new Map();
        encode.forEach((v,k) => {
            let valArray:string[] = v;
            v.forEach(i => {
                decodeMap.set(i,k);
            });
        });
        this.decodeMap = decodeMap;
    }
    protected generateKeyTableDisplay(encode:Map<string,string[]>){
        const header:td[] = [];
        const rows:[td[]] = [[]];
        let row:td[] = [];
        let c = 0;//column number
        encode.forEach((v,k) => {
            //creates an array of header values
            header.push({key:k,value:k});
            let r = 0; //indicates the row number
            //for a given key, there will be an array of 1...n values
            //we need to:
            //1. retrieve from rows the row array at position 0
            //2. if it doesn't exist, create the array and populate it with ''
            //3. push value to row array
            //4. If there are more rows in the rows array, then for each of those add ''
            v.forEach(item => {
                row = rows[r];
                if(!row){
                    row = [];
                    for(let j = 0; j<c; j++){
                        row.push({key:k+''+r, value:''});
                    }
                    rows[r]=row;
                }
                row.push({key:k+''+r,value:item});
                r++;
            });
            //add in '' to the r,c values if necessary
            for(let j=r; j<rows.length; j++){
                row = rows[j];
                row.push({key:k+''+j,value:''});
            }

            c++;
        });
        this.keyDisplayTable = {header: header, rows: rows};
    }
}