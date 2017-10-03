import express from 'express';
import open from 'open';
import bodyParser from 'body-parser';
import {graphqlExpress, graphiqlExpress} from 'apollo-server-express';

import schema from '../server/graphql.schema';

const port = 8080;
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}/graphiql`);
  }
});
