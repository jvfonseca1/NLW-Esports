import './styles/main.css';

import logoimg from './assets/logo-nlw.svg';
import {MagnifyingGlassPlus} from "phosphor-react";
import { GameBanner } from './components/GameBanner/GameBanner';
import { CreatAddBanner } from './components/CreateAddBanner/CreateAddBanner';


function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoimg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
      </h1>

      {/* Grid de Jogos */}
      <div id='games-grid' className='grid grid-cols-6 gap-6 mt-16'>
        
        <GameBanner bannerUrl='/game-1.png' title='League of Legends' adsCount={5}/>
        
        <GameBanner bannerUrl='/game-2.png' title='Dota 2' adsCount={5}/>
        
        <GameBanner bannerUrl='/game-3.png' title='Counter Strike: GO' adsCount={5}/>
        
        <GameBanner bannerUrl='/game-4.png' title='Apex Legends' adsCount={5}/>
        
        <GameBanner bannerUrl='/game-5.png' title='Fortnite' adsCount={5}/>
        
        <GameBanner bannerUrl='/game-6.png' title='World of Warcraft' adsCount={5}/>

       
      </div>
      
      {/* Postagem de Anúncios */}
      <CreatAddBanner/>

    </div>
  )
}

export default App
