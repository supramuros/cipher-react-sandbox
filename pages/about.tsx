import {Layout} from '../components/Layout'

export const Index = (): JSX.Element => (
  <Layout title='Cypher'>
    <h1>About</h1>
    <p>This was built as a testing platform to learn React. The reference for the implementation is the 
    <a href="https://en.wikipedia.org/wiki/Substitution_cipher"> Wikipedia Article</a>.
    </p>
    <p>None of the details contained on these pages should be considered cryptographically secure or used for any important purpose.</p>
    <style jsx>{`
            h1 {
                text-align: center;
            }
            `}
    </style>
  </Layout>
)

export default Index