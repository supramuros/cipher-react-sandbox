import {keyDisplayTable, td} from "../models/key";

export default class VigenereCypher {
    //The table is a 2-d array, but we'll represent as a Map where the key returns a Map
    //That way we can facilitate lookup rather easily
    encodeMapTable:Map<string,Map<string,string>>;
    //Decoding shares the same main key but the value Map is reversed
    //Since we lookup the value in the table and return the column header
    decodeMapTable:Map<string,Map<string,string>>;
    keyDisplayTable:keyDisplayTable;
    constructor(){
        this.encodeMapTable = new Map();
        this.decodeMapTable = new Map();
        for(let r=0; r<26; r++){
            let encodeRowMap:Map<string,string> = new Map();
            let decodeRowMap:Map<string,string> = new Map();
            let j = 65;
            for(let i=65; i<91; i++){
                //construct the rowMap shifting by the row number r 
                if(i+r < 91) {
                    encodeRowMap.set(String.fromCharCode(i),String.fromCharCode(i+r));
                    decodeRowMap.set(String.fromCharCode(i+r), String.fromCharCode(i));
                }
                //circle back around starting at 65(A) to finish the remaining characters
                else {
                    encodeRowMap.set(String.fromCharCode(i),String.fromCharCode(j));
                    decodeRowMap.set(String.fromCharCode(j),String.fromCharCode(i));
                    j++;
                }
    
            }
            this.encodeMapTable.set(String.fromCharCode(r+65),encodeRowMap);
            this.decodeMapTable.set(String.fromCharCode(r+65),decodeRowMap);
        }
        this.generateKeyTableDisplay(this.encodeMapTable);      
    }

    encrypt(input:string, seed:string):string{
        const block = 5;
        let out = '';
        input = input.replace(/\s/g, '');
        seed = seed.replace(/[^a-zA-Z]/g, '').toUpperCase(); 
        let c = 1;   
        for(let i=0; i<input.length; i++){
            if(this.encodeMapTable.get(input.charAt(i)) && seed){
                out=out+this.encodeMapTable.get(input.charAt(i)).get(seed.charAt(i % seed.length));
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
    
    decrypt(input:string, seed:string):string{
        let out = '';
        input = input.replace(/\s/g, '');
        seed = seed.replace(/[^a-zA-Z]/g, '').toUpperCase();
        for(let i=0; i<input.length; i++){
            if(this.decodeMapTable.get(input.charAt(i)) && seed){
                out=out+this.decodeMapTable.get(seed.charAt(i % seed.length)).get(input.charAt(i));
            }
            else out=out+input.charAt(i);
        }
        return out;
    }
    protected generateKeyTableDisplay(encode:Map<string,Map<string,string>>){
        const header:td[] = [];
        const rows:[td[]] = [[]];
        let row:td[] = [];
        let r = 0;
        header.push({key:'-1', value:''})
        encode.forEach((v,k) => {
            //creates an array of header values
            header.push({key:k,value:k, classNames:'brd-bottom font-bold font-sm'});
            rows[r] = [{key:'-1'+k, value:k, classNames:'brd-right font-bold font-sm'}];
            row = [];
            v.forEach((vv,kk) => {
                row.push({key:kk+r, value: vv, classNames:'font-sm'});
            });
            rows[r] = rows[r].concat(row);
            r++;
        });
        this.keyDisplayTable = {header: header, rows: rows};
    }
}
