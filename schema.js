import { buildSchema  } from 'graphql';


const schema = buildSchema(`
    type query {
        hello: String
    }    
`)

export default schema
