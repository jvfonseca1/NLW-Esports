import './styles/main.css';

import logoimg from './assets/logo-nlw.svg';
import { GameBanner } from './components/GameBanner/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner/CreateAdBanner';
import { useEffect, useState } from 'react';

// Tipagem Game
interface Game {
  id: string;
  title: string;
  bannerURL: string;
  _count: {
    ads: number;
  }
}

function App() {

  // Conexão com a api
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:8080/games')
      .then ((response) => response.json())
      .then ((data) => {
        setGames(data)
      })
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoimg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui!
      </h1>

      {/* Grid de Jogos */}
      <div id='games-grid' className='grid grid-cols-6 gap-6 mt-16'>
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/Game-1.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block '>4 anúncuios</span>
          </div>
        </a>
      
        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/Game-2.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block '>2 anúncuios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/Game-3.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
              <strong className='font-bold text-white block'>Counter Strike: Global Offensive</strong>
              <span className='text-zinc-300 text-sm block '>5 anúncuios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/Game-4.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block '>7 anúncuios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/Game-5.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block '>15 anúncuios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/Game-6.png" alt="" />

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>World of Warcraft</strong>
            <span className='text-zinc-300 text-sm block '>3 anúncuios</span>
          </div>
        </a>

      </div>
      
      {/* Postagens de Anúncios */}
      <div className='pt-1 bg-nlw-gradient mt-8 self-stretch rounded-lg overflow-hidden '>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center '>
          <div>
            <h1 className='font-black text-2xl text-white'>Não encontrou seu duo?</h1>
            <span className='text-zinc-400 text-base font-normal'>Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className='px-4 py-3 bg-violet-500 rounded text-white hover:bg-violet-600 flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anúncio
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
