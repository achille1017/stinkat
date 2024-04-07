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

const PreSale = (props) => {
    const [web3, setWeb3] = useState(new Web3(DEFAULT_ETH_JSONRPC_URL))
    const [defaultAccount, setDefaultAccount] = useState()
    const [modalState, setModalState] = useState("closed")
    const [walletModalState, setWalletModalState] = useState("closed")
    const [overlayClass, setOverlayClass] = useState("inactiveOverlay")

    function switchOverlayMode() {
        overlayClass === "inactiveOverlay" ? setOverlayClass("overlayActive") : setOverlayClass("inactiveOverlay")
    }
    function closeOverlay() {
        setOverlayClass("inactiveOverlay")
    }
    function openModal() {
        setModalState("open")
        switchOverlayMode()
        document.body.style.overflow = 'hidden';
      }
      function closeModal() {
        closeWalletModal()
        setModalState("closed")
        closeOverlay()
        document.body.style.overflow = '';
      }
      function switchWalletModal() {
        if (walletModalState === 'closed') {
          setWalletModalState("open")
        } else {
          setWalletModalState("closed")
        }
      }
      function closeWalletModal() {
        setWalletModalState("closed")
      }
    useEffect(() => {
        let walletType = localStorage.getItem("walletType")
        if (walletType === "Metamask") {
            if (web3.givenProvider) {
                web3.setProvider(Web3.givenProvider)
            }
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
    }, [])
    return (
        <div id="presale">
            <p className="whiteP titleBox">PRESALE</p>
            {modalState === "closed" ?
                <button className='generalsButton' onClick={openModal} id='connectYourWalletButton'><p className="buttonP" >Connect Your Wallet</p></button> : <div>
                    <ClickAwayListener onClickAway={closeModal} touchEvent={false}>

                        <div id="connecterDiv">

                            <p id="chooseYourProvider">Connect your wallet</p>

                            <div id="line2Modal">

                                <ConnectWc web3={web3} ></ConnectWc>
                                <ConnectMetamask web3={web3}  ></ConnectMetamask>
                            </div>
                            <button id="closeConnecter" onClick={closeModal}><img id='closeImage' src={closeImage}></img></button>

                        </div>
                    </ClickAwayListener>
                    <div id="overlay" className={overlayClass}></div>

                </div>
            }
        </div>
    )
}

export default PreSale;
