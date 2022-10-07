import { useState, useEffect } from 'react';

import './styles/main.css';

import * as Dialog from '@radix-ui/react-dialog'

import logoImg from './assets/logo-nlw.svg';
import { GameBanner } from './components/GameBanner/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner/CreateAdBanner';
import { GameController, MagnifyingGlassPlus } from 'phosphor-react';
import { Input } from './components/Form/Input';

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

        <Dialog.Portal>
          <Dialog.Overlay />

          <Dialog.Content>
            <Dialog.Title>Publique um anúncio</Dialog.Title>

            
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
   </div>
  )
}

export default App
