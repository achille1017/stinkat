import logo from './assets/catLogo.png';
import kat from './assets/katVert.png';
import landingBackground from "./assets/catBackground.png"
import hamburger from "./assets/hamburgerWhite.png"
import { useState } from 'react';
import './App.css';
import { Timer } from './components/Timer/Timer';
import RevealOnScroll from './components/RevealOnScroll/RevealOnScroll';

function App() {
  const [menuMobile, setMenuMobile] = useState("closed")
  function toggleMenuMobile() {
    console.log(menuMobile)
    if (menuMobile === "closed") {
      document.body.style.overflow = 'hidden';
      setMenuMobile("open")
    }
    else {
      document.body.style.overflow = '';
      setMenuMobile("closed")
    }
  }
  return (
    <div className="App">
      <div id="topBar">
        <img id="logoTopBar" src={logo}></img>
        <div id='linksNavBar'>
          <a className='linkNavBar' href='#box3'>ABOUT</a>
          <a className='linkNavBar' href='#box5'>TOKENOMICS</a>
          <a className='linkNavBar' href='https://twitter.com/stinkatbase'>TWITTER</a>
          <a className='linkNavBar'>TELEGRAM</a>
        </div>
        <div id='timerDiv'>
          <Timer deadline="2024-04-15"></Timer>
          <p className="timerP">before the official launch.</p>
        </div>
        <button id='hamburger' onClick={toggleMenuMobile}><img id='hamburgerImg' src={hamburger}></img></button>
      </div>
      <div id="box1">
        <p id="text1" className='LemonMilk'>$TINKAT</p>
        <p id="text2">
          Get ready for a paw-some adventure with Based Shiba, the newest sensation on the BASE blockchain! Embracing the spirit of memes and good vibes, Based Shiba is not just a token; it’s a community-driven movement that’s here to shake things up in the crypto world.
        </p>
        <div id="box2">
          {/*<div id="miniBox2">
            <a>CHART</a>
            <a>JOIN US</a>
          </div>

          <a>Buy $STINKAT on UNISWAP</a>*/}
          <Timer deadline="2024-04-15"></Timer>

        </div>
      </div>
      <RevealOnScroll sens="left">
        <div id="box3">
          <p className='titleBox whiteP'>ABOUT</p>
          <p className='subTitleBox whiteP'>

            At Based Shiba, we believe in bringing joy and excitement to the BASE network. Our mission is to create a vibrant and inclusive community where members can unleash their creativity, share positive vibes, and ride the crypto wave together.

            Ready to embark on a thrilling adventure with Based Shiba? Join our community on social media, participate in events, and become part of the BASE Network revolution!
          </p>
        </div>
      </RevealOnScroll>
      <RevealOnScroll>

        <div id="box4">
          <p className='titleBox whiteP'>WHY STINKAT ?</p>
          <p className='subTitleBox whiteP'>

            Based Shiba isn’t just another token; it’s a movement that celebrates the joy of decentralized finance.
          </p>
          <div id="miniBox4">
            <p className='testMiniBox4'>

              Community-Driven: We’re not just building a token; we’re fostering a community. Join Based Shiba’s pack and be part of a lively group of crypto enthusiasts who appreciate the lighter side of blockchain technology.
            </p>
            <img id="logoBox4" src={logo}></img>
            <p className='testMiniBox4'>

              BASE Blockchain Vibes: Based Shiba is proudly calling BASE Network its home. We’re here to add a splash of color to the blockchain scene and create memorable experiences for our community.
            </p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll sens="left">

        <div id="box5">
          <p className='titleBox whiteP'>TOKENOMICS</p>
          <div id='tokenBox'>
            <div id='tokenBox2'>
              <div className='tokenP'>
                <p className='tokenP1'>10M</p>
                <p className='tokenP2'>TOTAL SUPPLY</p>
              </div>
              <div className='tokenP'>
                <p className='tokenP1'>ZERO</p>
                <p className='tokenP2'>TAXES</p>
              </div>
              <div className='tokenP'>
                <p className='tokenP1'>100%</p>
                <p className='tokenP2'>SAFU. LP Locked, CA renounced.</p>
              </div>
            </div>
            <img id='katVert' src={kat}></img>
          </div>

        </div>
      </RevealOnScroll>
      <RevealOnScroll>

        <div id="box6">
          <p className='titleBox whiteP'>HOW TO BUY</p>
          <div className='lineHowToBuy'>
            <p className='numberHTB'>1</p>
            <p className='howToBuyP'>Buy ETH from your favorited CEX such as Binance or coinbase.  Bridge your eth from ethereum to base using Orbiter.finance .</p>
          </div>
          <div className='lineHowToBuy'>
            <p className='numberHTB'>2</p>
            <p className='howToBuyP'>Connect Your wallet to Uniswap.  Make Sure you're using the Base Network.  Paste our official CA.</p>
          </div>

          <div className='lineHowToBuy'>
            <p className='numberHTB'>3</p>
            <p className='howToBuyP'>Buy $BRATT.  Do Not Jeet.  Take out your initials if you have to.  Most importantly, HOLD until we reach the millions.</p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll sens="left">

        <div id="box7">
          <p className='titleBox whiteP'>JOIN US NOW</p>
          <div id='joinUsDiv'>
            <a className='linkJoinUs'>TWITTER</a>
            <a className='linkJoinUs'>TELEGRAM</a>
          </div>
        </div>
      </RevealOnScroll>
      <img src={landingBackground} id="landingBackground"></img>
      <div id="overlay"></div>
      <div id='menuMobile' className={menuMobile}>
        <a className='linkNavBar whiteP' href='#box3' onClick={toggleMenuMobile}>ABOUT</a>
        <a className='linkNavBar whiteP' href='#box5' onClick={toggleMenuMobile}>TOKENOMICS</a>
        <a className='linkNavBar whiteP' href='https://twitter.com/stinkatbase'>TWITTER</a>
        <a className='linkNavBar whiteP'>TELEGRAM</a>
      </div>
    </div>
  );
}

export default App;
