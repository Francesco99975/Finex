const schema = `
    scalar DateTime


    type Query {
        etfs: [Etf!]!
        etf(sym: String!): Etf!
        dividendEtfs: [Etf!]!
        highPricedEtfs: [Etf!]!
        lowPricedEtfs: [Etf!]!
        gainersEtfs: [Etf!]!
        losersEtfs: [Etf!]!
        searchEtfs(search: String!): [Etf!]!
        searchDividendEtfs(search: String!): [Etf!]!
        searchHighPricedEtfs(search: String!): [Etf!]!
        searchLowPricedEtfs(search: String!): [Etf!]!
        searchGainersEtfs(search: String!): [Etf!]!
        searchLosersEtfs(search: String!): [Etf!]!
    } 

    type Etf {
        symbol: ID!
        name: String!
        price: Float!
        price_change: Float!
        prev_close: Float!
        open_price: Float!
        percentage_change: String!
        bid: Float
        bid_size: Int
        ask: Float
        ask_size: Int
        days_range: String
        weeks_range: String
        volume: Int
        avg_volume: Int
        net_assets: String
        nav: Float
        pe_ratio: String
        dividend_yield: String!
        ytd_return: String
        beta: Float
        expense_ratio: String!
        inception_date: DateTime
    }
`;

export default schema;
