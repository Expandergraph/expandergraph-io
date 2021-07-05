import {get} from './http'

export const labels = (address) => get(`/address/${address}/labels`);
export const eth_balance = (address) => get(`/address/${address}/eth_balance`);

export const daily_activities = (address) => get(`/address/${address}/daily_activities/7`);


export const day_activities = (address) => get(`/address/${address}/day_activities/7`);

export const hour_activities = (address) => get(`/address/${address}/hour_activities/24`)


export const token_balances = (address) => get(`/address/${address}/token_balances`)

export const in_eth = (address) => get(`/address/${address}/in_eth`)


export const out_eth = (address) => get(`/address/${address}/out_eth`)



