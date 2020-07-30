import {FunctionComponent, Fragment} from "react";
import Link from 'next/link';

type Props = {
    links?: {href:string, name:string}[],
    styleClass?: "header-nav-a"|"footer-nav-a",
};



export const HeaderNav: FunctionComponent<Props> = (props) => {
   const linkDisplay = [];
   const styleClassName = props.styleClass ? props.styleClass : 'header-nav-a';
    if(props.links){
    for(let l of props.links){
        linkDisplay.push(<Link key ={l.href} href={l.href}><a className={styleClassName}>{l.name}</a></Link>)
    }
   } 
    return (
        <div className="header-nav">
            {linkDisplay}
            <style jsx>{`
            .header-nav {
                display:flex;
                flex-direction: row;
            }
            .header-nav-a {
                color: white;
                background-color:gray;
                text-decoration: none;
                font-size: 1em;
                height:100%;
                padding:1.7em;
                margin:0;
            }
            .footer-nav-a {
                color: white;
                background-color:gray;
                text-decoration: none;
                font-size: 1em;
                height:100%;
                padding:.5em;
                margin:0;
            }
            `}</style>
        </div>
    )
}