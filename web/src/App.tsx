import { useState, useEffect } from 'react';

import './styles/main.css';

import * as Dialog from '@radix-ui/react-dialog'

import logoImg from './assets/logo-nlw.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios';

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
    axios('http://localhost:8080/games').then ((response) => {
        setGames(response.data)
      })
  }, [])

  return (
   <div className='flex max-w-[1344px] mx-auto my-20 flex-col items-center '>
    <img src={logoImg} alt="" />

    <h1 className='text-6xl text-white font-black mt-20'>
      Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui!
    </h1>

    {/* Grid de Jogos */}
    <div className='grid grid-cols-6 gap-6 my-16'>
      {games.map (game => {
        return (
          <GameBanner
            key={game.id}
            title={game.title}
            bannerUrl={game.bannerURL}
            adsCount={game._count.ads}
          />
        )
      })}
    </div>
      <Dialog.Root>
        <CreateAdBanner/>

        <CreateAdModal/>      
      </Dialog.Root>
   </div>
  )
}

export default App
