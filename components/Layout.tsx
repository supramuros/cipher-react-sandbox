import {FunctionComponent, ReactNode} from "react";
import Head from 'next/head';
import {HeaderNav} from "./HeaderNav"
import Link from 'next/link';

type Props = {
    title: string;
    children?: ReactNode;
}
const headerLinks = [
    {href: "simple", name:"Simple Substitution"},
    {href: "homophonic", name:"Homophonic Substitution"},
    {href: "vigenere", name:"Vigenère"},
    {href: "about", name:"About"}
];
const footerLinks = [
    {href: "index", name:"Home"},
    {href: "about", name:"About"}
];

export const Layout: FunctionComponent<Props> = (props) => {
    return (
        <div className="grid-container">
            <Head>
                <title>{props.title}</title>
                <link rel="icon" href="/eye-off.svg" />
            </Head>
            <header>
                <label htmlFor="hamburger">&#9776;</label>
                <input type="checkbox" id="hamburger"/>
                <Link href="index"><a><h1>Cypher</h1></a></Link>
                <HeaderNav links={headerLinks} />
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <HeaderNav styleClass="footer-nav-a" links={footerLinks}/>
            </footer>

            <style jsx>{`
            .grid-container {
                display: grid;
                grid-template-columns: auto 1fr auto;
                grid-template-rows: auto 1fr auto;
                grid-template-areas: 
                "header header header"
                "left main right"
                "footer footer footer";
                height: 100vh;
            }
            .flex-container {
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                height: 100%;
            }
            .flex-center {
                display:flex;
                flex: 1 0 auto;
                flex-direction:column;
                justify-content: center;
                align-items: center;
            }
            .flex-left {
                display:flex;
                flex: 1 0 auto;
                flex-direction:column;
                justify-content: flex-start;
                align-items: flex-start;
            }
            header {
                grid-area: header;
                display: flex;
                flex 1 0 auto;
                align-items: center;
                background-color: gray;
                padding: 0 1em;
                margin:0;
            }
            
            main {
                display: flex;
                flex: 1 1 auto;
                flex-grow: 1;
                flex-direction: column;
                margin: 0;
                padding: 1em;
                grid-area: main;
                align-items:center;
            }
            h1 {
                text-align: center;
                margin:0.5em;
                color: white;
                text-decoration:none;
            }
            a {
                text-decoration: none;
            }
            h2 {
                text-align: left;
            }
            p {
                text-align: left;
            }
            label {
                text-align: left;
            }
            footer {
                width: 100%;
                flex: 0 0 auto;
                display: flex;
                justify-content: center;
                align-items: center;
                align-self: flex-end;
                grid-area: footer;
                margin: 0;
                padding: 0 1em;
                background-color: gray;
            }
            `}</style>

            <style jsx global>{`
            html,
            body {
                padding: 0;
                margin: 0;
                height: 100%;
                width: 100%;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

            }
            .header-nav-li {
                display: inline-flex;
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
            .header-nav-a:hover {
                color: gray;
                background-color: white;
                font-size: 1em;
            }
            .header-nav {
                display:flex;
                flex-direction: row;
            }
            label[for=hamburger], #hamburger { 
                display: none;
                    color: white;
                    font-size: 1.5em;
                    padding: 10px; 
            }
            @media only screen and (max-width: 800px) {
                header{
                    flex-direction:row;
                }
                .header-nav-a {
                  display:none;
                }
                label[for=hamburger]{ 
                    display: inline;
                    color: white;
                    font-size: 1.5em;
                    padding: 10px;
                 
                }
                input#hamburger:checked ~ .header-nav {
                    display:flex;
                    flex-direction: column;
                }
                input#hamburger:checked ~ .header-nav > .header-nav-a {
                    display:inline-flex;
                  }
                
              }
            .footer-nav-a {
                color: white;
                background-color:gray;
                text-decoration: none;
                font-size: 1em;
                height:100%;
                padding:.25em 1em;
                margin:0;
            }
            .footer-nav-a:hover {
                color: gray;
                background-color: white;
                font-size: 1em;
            }
            * {
                box-sizing: border-box;
            }
            /* normalize divs surrounding the content*/
            body > div:first-child,
            #__next,
            #__next > div,
            #__next > div > div {
                height: 100vh;
                width: 100vw;
            }
            `}</style>
        </div>
    );

}