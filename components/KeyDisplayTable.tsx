import React, {FunctionComponent} from "react";
import {keyDisplayTable} from "../models/key";

type KeyDisplayProps = {
    id?: string;
    label: string;
    header1?: string;
    header2?: string;
    keyTable: keyDisplayTable;
}

export const KeyDisplayTable: FunctionComponent<KeyDisplayProps> = (KeyDisplayProps) => {
    let header = [];
    let body = [];
    let dispHeader = <div className="flex-item"></div>;
    if(KeyDisplayProps.keyTable){

        //sort header by Key and then map
        header = KeyDisplayProps.keyTable.header
        .sort((a,b)=>{
            let keyA = a.key;
            let keyB = b.key;
            if (keyA < keyB) {
                return -1;
              }
            if (keyA > keyB) {
                return 1;
              }
              return 0;
        })
        .map(h => {
            return <th key={h.key} className={h.classNames}>{h.value}</th>
        });
        body = KeyDisplayProps.keyTable.rows.map((b,index) => {
            return <tr key={index}>{
                b.sort((a,b)=>{
                    let keyA = a.key;
                    let keyB = b.key;
                    if (keyA < keyB) {
                        return -1;
                    }
                    if (keyA > keyB) {
                        return 1;
                    }
                    return 0;
                })   
                .map(r => {
                return <td key={r.key+''+index} className={r.classNames}>{r.value}</td>
            })}</tr>
        });

        
        if(header && (KeyDisplayProps.header1 || KeyDisplayProps.header2)){
            dispHeader = <div className="flex-item">
                            <h3 className="right-h3">{KeyDisplayProps.header1}</h3>
                            <h3 className="right-h3">{KeyDisplayProps.header2}</h3>
                        </div>
        }
    }
    

    return (
        
        <div className="flex-container">
            {dispHeader}
            <div className="flex-item">
                <table>
                <thead>
                    <tr>
                        {header}
                    </tr>
                </thead>
                <tbody>
                    {body}
                </tbody>
                </table>  
            </div>
            <style jsx>{`
                .flex-container {
                    display:flex;
                    flex-direction: row;
                }
                .flex-item {
                    display:flex;
                    
                }
                h3{
                    margin: 0 1em 0 0;
                    text-align: right;
                    font-size:1em;
                    display:block;
                }
                table{
                    border: solid;
                    border-radius:10px;
                    border-collapse: collapse;
                    table-layout: fixed;
                }
                tr{
                    border-bottom:solid;
                }
                thead{
                    text-align: center;
                }
                tbody{
                    text-align: center;
                }
                .color-red{
                    color: red;
                }
            `}
            </style>
            <style jsx global>{`
            .color-red{
                    color: red;
                    border: solid;
                    }
            .brd-right {
                border-right:solid;
            }
            .brd-bottom {
                border-bottom:solid;
            }
            .font-bold {
                font-weight:bold;
            }
            .font-sm {
                font-size: .75em;
            }
            .right-h3{
                margin: 0 1em 0 0;
                text-align: right;
                font-size:1em;
                display:block;
            }
            .animate{
                color: black;
                animation-name:red;
                animation-duration:.5s;
            }
            @keyframes red{
                from {color: black; font-size:2em; font-weight:bold;}
                to {color: red;}
            }
            `}
            </style>
        </div>
        
            
    )
}