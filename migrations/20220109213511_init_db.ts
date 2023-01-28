import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('etfs', (table) => {
    table.specificType('symbol', 'CHAR(16)').primary();
    table.string('name', 100).notNullable().unique();
    table.double('price', 2).notNullable();
    table.double('price_change', 2).notNullable();
    table.double('prev_close', 2).notNullable();
    table.string('percentage_change', 30).notNullable();
    table.double('open_price', 2).notNullable();
    table.double('bid', 2).nullable();
    table.integer('bid_size', 25).nullable();
    table.double('ask', 2).nullable();
    table.integer('ask_size', 25).nullable();
    table.string('days_range', 30).nullable();
    table.string('weeks_range', 30).nullable();
    table.integer('volume', 25).nullable();
    table.integer('avg_volume', 25).nullable();
    table.string('net_assets', 30).nullable();
    table.double('nav', 2).nullable();
    table.string('pe_ratio', 30).nullable();
    table.string('dividend_yield', 30).notNullable();
    table.string('ytd_return', 30).nullable();
    table.double('beta', 2).nullable();
    table.string('expense_ratio', 30).notNullable();
    table.timestamp('inception_date').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('etfs');
}
