import logo from './assets/catLogo.png';
import landingBackground from "./assets/catBackground.png"
import './App.css';
import { Timer } from './components/Timer/Timer';

function App() {
  return (
    <div className="App">
      <div id="topBar">
        <img id="logoTopBar" src={logo}></img>
        <div>

        </div>
        <Timer deadline="2024-04-15"></Timer>

      </div>
      <div id="box1">
        <p id="text1">STINKAT</p>
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
      <div id="box3">
        <p className='titleBox blackP'>ABOUT</p>
        <p className='subTitleBox blackP'>

          At Based Shiba, we believe in bringing joy and excitement to the BASE network. Our mission is to create a vibrant and inclusive community where members can unleash their creativity, share positive vibes, and ride the crypto wave together.

          Ready to embark on a thrilling adventure with Based Shiba? Join our community on social media, participate in events, and become part of the BASE Network revolution!
        </p>
      </div>
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
      <div id="box5">
        <p className='titleBox blackP'>TOKENOMICS</p>
        <div className='underMiniBox5'>
            <p>TOKEN ADDRESS</p>
            <p>0xfEA9DcDc9E23a9068bF557AD5b186675C61d33eA</p>
          </div>
        <div id='miniBox5'>
          
          <div className='underMiniBox5'>
            <p>
              TOKEN SUPPLY</p>
            <p>
              10,000,000,000
            </p>
          </div>
          <div className='underMiniBox5'>
            <p>
              TICKER</p>
            <p>
              $STINKAT
            </p>
          </div>
        </div>
        <p>No taxes, ​liquidity locked, contract ownership renounced. It’s that simple.</p>
      </div>
      <div id="box6">
        <p className='titleBox whiteP'>HOW TO BUY</p>
        <div>
          <p>Get ETH</p>
          <p></p>
        </div>
        <div>
          <p>Bridge your ETH</p>
          <p></p>
        </div>
        <div>
          <p>SWITCH YOUR BASE ETH FOR $STINKAT</p>
          <p></p>
        </div>
      </div>
      <div id="box7">
        <p className='titleBox'>JOIN US NOW</p>
        <div>  
                <a>TWITTER</a>
          <a>TELEGRAM</a>
        </div>
      </div>
      <img src={landingBackground} id="landingBackground"></img>
      <div id="overlay"></div>
    </div>
  );
}

export default App;
