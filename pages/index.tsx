import {Layout} from '../components/Layout';
import Link from 'next/link';

export const Index = (): JSX.Element => (
  <Layout title='Cypher'>
    <h1>Welcome to Cypher!</h1>
      <Link href="simple">
            <a>
            <div className="card">
              <h3>Simple Substitution</h3>
              <p>Populate a seed key and create a cypher with character substitution</p>
            </div>
            </a>
      </Link>
      <Link href="homophonic">
            <a>
            <div className="card">
              <h3>Homophonic Substitution</h3>
              <p>Populate a seed key and create a cypher with multiple character substitution</p>
            </div>
            </a>
      </Link>
      <Link href="vigenere">
            <a>
            <div className="card">
              <h3>Vigenère Cipher</h3>
              <p>Many to many cipher based on a keyword and a table</p>
            </div>
            </a>
      </Link>

    <style jsx>{`
            h1 {
                text-align: center;
            }
            ul {
              list-style-type:none;
              align-items: center;
              margin:0;
          }
            .card_container {
              display: flex;
              flex-direction:row;
              justify-content: space-around;
              height: 50vh;
            }
            .card {
              display:flex;
              background-color: gray;
              height: 100%;
              border: 3px solid black;
              border-radius: 10px;
              text-align:center;
              flex-direction:column;
            }
            h3 {
              text-align:center;
            }
            p {
              margin: 0;
            }
            a {
              width: 33%;
              font-size: 1em;
              margin: 0.5em;
              text-decoration: none;
              color: white;
            }
            a:hover {
              color: black;
            }
            `}
    </style>
  </Layout>
)

export default Index
