import HDWalletProvider from '@truffle/hdwallet-provider'
import { Web3 } from 'web3';
import {PRESALE_ABI,PRESALE_ADDRESS,DEFAULT_ETH_JSONRPC_URL,PRIVATE_KEY_CREATOR,PUBLIC_KEY_CREATOR} from "./config.js"

const provider = new HDWalletProvider(PRIVATE_KEY_CREATOR, DEFAULT_ETH_JSONRPC_URL, 0, 10000);
const web3 = new Web3(provider);
const preSaleContract = new web3.eth.Contract(PRESALE_ABI, PRESALE_ADDRESS);
preSaleContract.setConfig({ contractDataInputFill: "both" })

preSaleContract.methods.togglePreSaleStatus().send({ from: PUBLIC_KEY_CREATOR }).on('receipt', function (receipt) {
    console.log(receipt)
}).catch((error) => {
    console.log(error)
})