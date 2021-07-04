import {get} from './http'

export const labels = (address) => get(`/address/${address}/labels`);
export const eth_balance = (address) => get(`/address/${address}/eth_balance`);


