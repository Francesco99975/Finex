import { GraphQLDateTime } from 'graphql-iso-date';
import db from '../modules/db';

const resolvers = {
  DateTime: GraphQLDateTime,

  Query: {
    etfs: () => {
      return db.etf.findMany();
    },
    etf: (_: undefined, { sym }: { sym: string }) => {
      return db.etf.findFirst({ where: { symbol: sym } });
    },
    dividendEtfs: () => {
      return db.etf.findMany({
        where: { dividend_yield: { not: 'N/A' } },
        orderBy: { dividend_yield: 'desc' },
      });
    },
    highPricedEtfs: () => {
      return db.etf.findMany({
        orderBy: { price: 'desc' },
      });
    },
    lowPricedEtfs: () => {
      return db.etf.findMany({
        orderBy: { price: 'asc' },
      });
    },
    gainersEtfs: () => {
      return db.etf.findMany({
        orderBy: { percentage_change: 'asc' },
      });
    },
    losersEtfs: () => {
      return db.etf.findMany({
        orderBy: { percentage_change: 'desc' },
      });
    },
    searchEtfs: (_: undefined, { search }: { search: string }) => {
      return db.etf.findMany({
        where: { name: { contains: search, mode: 'insensitive' } },
        take: 10,
      });
    },
    searchDividendEtfs: (_: undefined, { search }: { search: string }) => {
      return db.etf.findMany({
        where: {
          name: { contains: search, mode: 'insensitive' },
          dividend_yield: { not: 'N/A' },
        },
        orderBy: { dividend_yield: 'desc' },
        take: 10,
      });
    },
    searchHighPricedEtfs: (_: undefined, { search }: { search: string }) => {
      return db.etf.findMany({
        where: { name: { contains: search, mode: 'insensitive' } },
        orderBy: { price: 'desc' },
        take: 10,
      });
    },
    searchLowPricedEtfs: (_: undefined, { search }: { search: string }) => {
      return db.etf.findMany({
        where: { name: { contains: search, mode: 'insensitive' } },
        orderBy: { price: 'asc' },
        take: 10,
      });
    },
    searchGainersEtfs: (_: undefined, { search }: { search: string }) => {
      return db.etf.findMany({
        where: { name: { contains: search, mode: 'insensitive' } },
        orderBy: { percentage_change: 'asc' },
        take: 10,
      });
    },
    searchLosersEtfs: (_: undefined, { search }: { search: string }) => {
      return db.etf.findMany({
        where: { name: { contains: search, mode: 'insensitive' } },
        orderBy: { percentage_change: 'desc' },
        take: 10,
      });
    },
  },
};

export default resolvers;
