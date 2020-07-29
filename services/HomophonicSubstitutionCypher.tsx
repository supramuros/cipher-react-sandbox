import {SubCypher} from "./ICypher";
import SubstitutionCypher from "./SubstitutionCypher";
import {keyDisplayTable, td} from "../models/key";

export default class HomophonicSubstitutionCypher extends SubstitutionCypher implements SubCypher {
    name='Homophonic';
    encodeMap:Map<string,string[]> = new Map();
    decodeMap:Map<string,string> = new Map();
    encodingCharacters:string[];
    cypherCharacters:string[];
    keyDisplay:[string[]];
    keyDisplayTable:keyDisplayTable;
    constructor() {
        super();
        this.encodingCharacters=[];
        this.cypherCharacters=[];
        //Add A-Z, a-z, 0-9 to the cypherCharacters
        //Add A-Z only to the encoding characters
        for(let i = 65; i<91; i++){
            this.cypherCharacters.push(String.fromCharCode(i));
            this.encodingCharacters.push(String.fromCharCode(i));
        }
        for(let i = 97; i<123; i++){
            this.cypherCharacters.push(String.fromCharCode(i));
        }
        for(let i = 48; i<58; i++){
            this.cypherCharacters.push(String.fromCharCode(i));
        }
    }
    encrypt(input:string):string{
        const blocksize = 5;
        return super.generateOutputFromKey(input,blocksize);
    }

    decrypt(input:string):string{
        return super.generateInputFromKey(input);
    }

    generateEncoding(seed?:string):void{
        const keyMap:Map<string,string[]> = new Map();
        //Append cypher characters (A-Z,a-z,0-9 in that order) to seed
        const seedArray:string[] = seed.replace(/[^a-zA-Z0-9]/g, '').split('').concat(this.cypherCharacters);
        //Ensure we have a unique seed array
        const uniqueSeedSet = new Set();
        let uniqueSeedArray = [];
        seedArray.forEach(item=>{uniqueSeedSet.add(item);});
        uniqueSeedArray = Array.from(uniqueSeedSet);
        console.log('In Generate Encoding');
        //Loop through the freqChars 3 times
        const freqChars =['A','E','H','I','N','O','R','S','T'];
        let existingMapValue:string[] = [];
        for(let i=0; i<3; i++){
            freqChars.forEach(f => {
                if(keyMap.get(f)){
                    existingMapValue = keyMap.get(f);
                }
                existingMapValue.push(uniqueSeedArray.shift());
                keyMap.set(f,existingMapValue);
                existingMapValue = [];
            });
        }
        //Loop through A-Z and encode the remaining seed values
        this.encodingCharacters.forEach(c => {
            if(keyMap.get(c)){
                existingMapValue = keyMap.get(c);
            }
            existingMapValue.push(uniqueSeedArray.shift());
            keyMap.set(c,existingMapValue);
            existingMapValue = [];
        });   
        this.encodeMap = keyMap;
        super.generateDecoding(keyMap);
        this.keyDisplay=this.generateKeyDisplay(keyMap);
        super.generateKeyTableDisplay(keyMap);
    }
    private generateKeyDisplay(encode:Map<string,string[]>):[string[]]{
        //row for the header containing all the keys
        const header = [];
        //array for storing the table rows
        const rows = [];
        //temporary storage location for a single row
        let row = [];
        let c = 0;//column number
        encode.forEach((v,k) => {
            //creates an array of header values
            header.push(k);
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
                        row.push('');
                    }
                    rows[r]=row;
                }
                row.push(item);
                r++;
            });
            //add in '' to the r,c values if necessary
            for(let j=r; j<rows.length; j++){
                row = rows[j];
                row.push('');
            }

            c++;
        });
        rows.unshift(header);
        return [rows];
    }
}