import { GraphQLDateTime } from 'graphql-iso-date';
import db from '../modules/db';

const resolvers = {
  DateTime: GraphQLDateTime,

  Query: {
    etfs: () => {
      return db.etf.findMany({ orderBy: { dividend_yield: 'desc' } });
    },
  },
};

export default resolvers;
