import Web3 from "web3";
import { EthereumProvider } from '@walletconnect/ethereum-provider'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import ConnectMetamask from '../ConnectMetamask/ConnectMetamask';
import ConnectWc from '../ConnectWC/ConnectWC';
import ConnectCb from '../ConnectCB/ConnectCB';
import React, { useState, useEffect } from 'react';
import closeImage from "../../assets/close.png"
import "./PreSale.css"
const DEFAULT_ETH_JSONRPC_URL = "https://bsc-testnet.blockpi.network/v1/rpc/public"
const PRESALE_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "balances",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "buyTokens",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "getBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalPresaleTokensRemaining",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "maxTokenPerUser",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "presalePrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "token",
        "outputs": [
            {
                "internalType": "contract ISTINKAT",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalPresaleTokensRemaining",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
const PRESALE_ADDRESS = "0x2c91632d84617Be03BB6394D45E6748c88Fd692a"
const PreSale = (props) => {
    const [web3, setWeb3] = useState(new Web3(DEFAULT_ETH_JSONRPC_URL))
    const [defaultAccount, setDefaultAccount] = useState()
    const [ethBalance, setEthBalance] = useState()
    const [preSaleContract, setPreSaleContract] = useState()
    const [tokensRemaining, setTokensRemaining] = useState()
    const [balance, setBalance] = useState()



    function disconnect() {
        console.log("disconnecting wallet")
        setDefaultAccount(undefined)
        web3.setProvider(DEFAULT_ETH_JSONRPC_URL)
        localStorage.clear();
    }
    useEffect(() => {
        let walletType = localStorage.getItem("walletType")
        if (walletType === "Metamask") {
            web3.setProvider(window.ethereum)
        }
        else {
            web3.setProvider(DEFAULT_ETH_JSONRPC_URL)
        }
        let getAccounts = async () => {
            const accounts = await web3.eth.getAccounts();
            if (accounts[0] !== undefined) {
                setDefaultAccount(accounts[0]);
            }
        }
        getAccounts()
        setPreSaleContract(new web3.eth.Contract(PRESALE_ABI, PRESALE_ADDRESS));

    }, [])
    useEffect(() => {
        if (defaultAccount !== undefined) {
            web3.eth.getBalance(defaultAccount).then((result) => setEthBalance(parseFloat(result) / 10 ** 18));
            preSaleContract.methods.getTotalPresaleTokensRemaining().call().then((result) => { setTokensRemaining(parseFloat(result) / 10 ** 18) })
            preSaleContract.methods.getBalance(defaultAccount).call().then((result) => { setBalance(parseFloat(result) / 10 ** 18) })

        }
    }, [defaultAccount])
    return (
        <div id="presale">
            <p className="whiteP titleBox">PRESALE</p>

            {defaultAccount === undefined ? <div id="connecterDiv">

                <p id="chooseYourProvider" className="whiteP">Connect your wallet</p>

                <div id="line2Modal">
                    <ConnectMetamask web3={web3} setDefaultAccount={setDefaultAccount} ></ConnectMetamask>

                    <ConnectWc web3={web3} setDefaultAccount={setDefaultAccount}></ConnectWc>
                </div>

            </div> : <div>
                <p id="chooseYourProvider" className="whiteP">Connected as {defaultAccount}</p>
                <div>
                    <p className="whiteP">{ethBalance} ETH</p>
                    <button id="disconnect" onClick={(e) => { disconnect() }}>Disconnect</button></div>
            </div>}
            <div>
                <p className="whiteP">Tokens remaining : {tokensRemaining}</p>
                {balance !== undefined && <p className="whiteP">{balance}</p>}
            </div>
            <div>
                <input type="text" placeholder="$ETH"></input>
                <input type="text" placeholder="$STINKAT"></input>
                <button>BUY $STINKAT</button>
            </div>
        </div>
    )
}

export default PreSale;
