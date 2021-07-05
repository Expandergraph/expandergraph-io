import {get} from './http'

export const labels = (address) => get(`/address/${address}/labels`);
export const eth_balance = (address) => get(`/address/${address}/eth_balance`);

export const daily_activities = (address) => get(`/address/${address}/daily_activities/7`);


export const day_activities = (address) => get(`/address/${address}/day_activities/7`);

export const hour_activities = (address) => get(`/address/${address}/hour_activities/24`)


export const token_balances = (address) => get(`/address/${address}/token_balances`)

export const in_eth = (address) => get(`/address/${address}/in_eth`)


export const out_eth = (address) => get(`/address/${address}/out_eth`)

export const top_labels = (num_of_rows,offset) => get(`/top_labels/${num_of_rows}/${offset}`)


// 代币

export const exchange_supply_ratio = (token) => get(`/token/${token}/exchange_supply_ratio`)

export const txs_num = (token) => get(`/token/${token}/txs_num`)

export const volume_on_exchanges = (token) => get(`/token/${token}/volume_on_exchanges`)

export const top_exchanges = (token) => get(`/token/${token}/top_exchanges`)





