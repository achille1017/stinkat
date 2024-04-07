import logo from './assets/catLogo.png';
import kat from './assets/katVert.png';
import landingBackground from "./assets/catBackground.png"
import hamburger from "./assets/hamburgerWhite.png"
import { useEffect, useState } from 'react';
import './App.css';
import { Timer } from './components/Timer/Timer';
import RevealOnScroll from './components/RevealOnScroll/RevealOnScroll';
import PieChart from './components/PieChart/PieChart';
import PreSale from './components/PreSale/PreSale';



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
          <a className='linkNavBar' href='#about'>ABOUT</a>
          <a className='linkNavBar' href='#tokenomics2'>TOKENOMICS</a>
          <a className='linkNavBar' href='https://twitter.com/stinkatbase'>TWITTER</a>
          <a className='linkNavBar' href='https://t.me/stinkatportal'>TELEGRAM</a>
        </div>
        <div id='timerDiv'>
          <Timer deadline="2024-04-11 14:0:0 GMT"></Timer>
          <p className="timerP">before the official launch.</p>
        </div>
        <button id='hamburger' onClick={toggleMenuMobile}><img id='hamburgerImg' src={hamburger}></img></button>
      </div>
      <div id="box1">
        <p id="text1" className='LemonMilk'>STINKAT</p>
        <div id="box2">

          <Timer deadline="2024-04-11 14:0:0 GMT"></Timer>
          <p id='until'>Until the $STINKAT PreSale</p>
        </div>
        <p id="text2">
          Get ready for a journey unlike any other in the crypto universe. Fueled by madness and
          thriving on human absurdity, this ecosystem is born to flourish in our modern age.        </p>

      </div>
      {/*<RevealOnScroll>
        <PreSale></PreSale>
  </RevealOnScroll>*/}
      <RevealOnScroll>

        <div id="box6">
          <p className='titleBox whiteP'>ROADMAP</p>
          <div className='lineHowToBuy'>
            <p className='numberHTB'>11/04</p>
            <p className='howToBuyP'> PRESALE AT 14:00 GMT : 4400000 tokens availables for 24 hours. 660 $STINKAT for 0.0003 ETH. Maximum 198000 tokens per wallet. Tokens not sold will be burnt.</p>
          </div>
          <div className='lineHowToBuy'>
            <p className='numberHTB'>14/04</p>
            <p className='howToBuyP'>PUBLIC SALE AT 14:00 GMT : 100 % of the presale funds are for liquidity. The same amount of tokens bought during the presale will be availables.</p>
          </div>

          <div className='lineHowToBuy'>
            <p className='numberHTB'>01/05</p>
            <p className='howToBuyP' id="tokenomics">$STINKAT pass $BRETT as the top memecoin on BASE.</p>
          </div>
        </div>
      </RevealOnScroll>
      <RevealOnScroll  >

        <div id="tokenomics2">
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
            <PieChart></PieChart>

          </div>

        </div>
      </RevealOnScroll>
      <div id='about'></div>

      <RevealOnScroll>

        <div id="box4">
          <p className='titleBox whiteP'>WHY STINKAT ?</p>

          <div id="miniBox4">
            <p className='testMiniBox4'>

              It's a movement that adopts a different way of thinking about investing, building a strong
              community that expresses itself through digital currency. $Tinkat represents a shift towards
              welcoming the unexpected and the wild side of crypto. It's not about the money – it's about
              sending a message.            </p>
            <img id="logoBox4" src={logo}></img>
            <p className='testMiniBox4'>

              The Base Chain's ecosystem is rapidly evolving, witnessing the development of numerous
              projects and applications. This dynamic expansion provides a solid foundation for Stinkat's
              success, enabling the builders to tap into the resources and expertise of other projects. As the
              Base Chain continues to grow, Stinkat's potential grows as well.            </p>
          </div>
        </div>
      </RevealOnScroll>


      <RevealOnScroll>

        <div id="box7">
          <p className='titleBox whiteP'>JOIN US NOW</p>
          <div id='joinUsDiv'>
            <a className='linkJoinUs' href='https://twitter.com/stinkatbase'>TWITTER</a>
            <a className='linkJoinUs' href='https://t.me/stinkatportal'>TELEGRAM</a>
          </div>
        </div>
      </RevealOnScroll>
      <img src={landingBackground} id="landingBackground"></img>
      <div id="overlay"></div>
      <div id='menuMobile' className={menuMobile}>
        <a className='linkNavBar whiteP' href='#about' onClick={toggleMenuMobile}>ABOUT</a>
        <a className='linkNavBar whiteP' href='#tokenomics' onClick={toggleMenuMobile}>TOKENOMICS</a>
        <a className='linkNavBar whiteP' href='https://twitter.com/stinkatbase'>TWITTER</a>
        <a className='linkNavBar whiteP' href='https://t.me/stinkatportal'>TELEGRAM</a>
      </div>
    </div>
  );
}

export default App;
