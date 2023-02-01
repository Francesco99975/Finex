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
    reits: () => {
      return db.reit.findMany();
    },
    reit: (_: undefined, { sym }: { sym: string }) => {
      return db.reit.findFirst({ where: { symbol: sym } });
    },
    stocks: () => {
      return db.stock.findMany();
    },
    stock: (_: undefined, { sym }: { sym: string }) => {
      return db.stock.findFirst({ where: { symbol: sym } });
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

    dividendReits: () => {
      return db.reit.findMany({
        where: { dividend_yield: { not: 'N/A' } },
        orderBy: { dividend_yield: 'desc' },
      });
    },
    highPricedReits: () => {
      return db.reit.findMany({
        orderBy: { price: 'desc' },
      });
    },
    lowPricedReits: () => {
      return db.reit.findMany({
        orderBy: { price: 'asc' },
      });
    },
    gainersReits: () => {
      return db.reit.findMany({
        orderBy: { percentage_change: 'asc' },
      });
    },
    losersReits: () => {
      return db.reit.findMany({
        orderBy: { percentage_change: 'desc' },
      });
    },
    searchReits: (_: undefined, { search }: { search: string }) => {
      return db.reit.findMany({
        where: { name: { contains: search, mode: 'insensitive' } },
        take: 10,
      });
    },
    searchDividendReits: (_: undefined, { search }: { search: string }) => {
      return db.reit.findMany({
        where: {
          name: { contains: search, mode: 'insensitive' },
          dividend_yield: { not: 'N/A' },
        },
        orderBy: { dividend_yield: 'desc' },
        take: 10,
      });
    },
    searchHighPricedReits: (_: undefined, { search }: { search: string }) => {
      return db.reit.findMany({
        where: { name: { contains: search, mode: 'insensitive' } },
        orderBy: { price: 'desc' },
        take: 10,
      });
    },
    searchLowPricedReits: (_: undefined, { search }: { search: string }) => {
      return db.reit.findMany({
        where: { name: { contains: search, mode: 'insensitive' } },
        orderBy: { price: 'asc' },
        take: 10,
      });
    },
    searchGainersReits: (_: undefined, { search }: { search: string }) => {
      return db.reit.findMany({
        where: { name: { contains: search, mode: 'insensitive' } },
        orderBy: { percentage_change: 'asc' },
        take: 10,
      });
    },
    searchLosersReits: (_: undefined, { search }: { search: string }) => {
      return db.reit.findMany({
        where: { name: { contains: search, mode: 'insensitive' } },
        orderBy: { percentage_change: 'desc' },
        take: 10,
      });
    },

    dividendStocks: () => {
      return db.stock.findMany({
        where: { dividend_yield: { not: 'N/A' } },
        orderBy: { dividend_yield: 'desc' },
      });
    },
    highPricedStocks: () => {
      return db.stock.findMany({
        orderBy: { price: 'desc' },
      });
    },
    lowPricedStocks: () => {
      return db.stock.findMany({
        orderBy: { price: 'asc' },
      });
    },
    gainersStocks: () => {
      return db.stock.findMany({
        orderBy: { percentage_change: 'asc' },
      });
    },
    losersStocks: () => {
      return db.stock.findMany({
        orderBy: { percentage_change: 'desc' },
      });
    },
    searchStocks: (_: undefined, { search }: { search: string }) => {
      return db.stock.findMany({
        where: { name: { contains: search, mode: 'insensitive' } },
        take: 10,
      });
    },
    searchDividendStocks: (_: undefined, { search }: { search: string }) => {
      return db.stock.findMany({
        where: {
          name: { contains: search, mode: 'insensitive' },
          dividend_yield: { not: 'N/A' },
        },
        orderBy: { dividend_yield: 'desc' },
        take: 10,
      });
    },
    searchHighPricedStocks: (_: undefined, { search }: { search: string }) => {
      return db.stock.findMany({
        where: { name: { contains: search, mode: 'insensitive' } },
        orderBy: { price: 'desc' },
        take: 10,
      });
    },
    searchLowPricedStocks: (_: undefined, { search }: { search: string }) => {
      return db.stock.findMany({
        where: { name: { contains: search, mode: 'insensitive' } },
        orderBy: { price: 'asc' },
        take: 10,
      });
    },
    searchGainersStocks: (_: undefined, { search }: { search: string }) => {
      return db.stock.findMany({
        where: { name: { contains: search, mode: 'insensitive' } },
        orderBy: { percentage_change: 'asc' },
        take: 10,
      });
    },
    searchLosersStocks: (_: undefined, { search }: { search: string }) => {
      return db.stock.findMany({
        where: { name: { contains: search, mode: 'insensitive' } },
        orderBy: { percentage_change: 'desc' },
        take: 10,
      });
    },
  },
};

export default resolvers;
