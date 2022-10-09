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
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

          <Dialog.Content 
            className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'
          >
            <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

            <form className='mt-8'>
              <div className='flex flex-col gap-2'>
                <label className='font-semibold' htmlFor='game'>Qual o game?</label>
                <input 
                  id='game' 
                  type="text" 
                  placeholder='Selecione o game que deseja jogar'
                  className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'  
                />
              </div>

              <div>
                <label htmlFor="name">Seu nome (ou Nickname)</label>
                <input id='name' type="text" placeholder='Como te chamam dentro do game?' />
              </div>

              <div>
                <div>
                  <label htmlFor="yearsPlaying" >Joga há quantos anos?</label>
                  <input id='yearsPlaying' type="number" placeholder='Tudo bem ser ZERO' />
                </div>

                <div>
                  <label htmlFor="dicsord">Qual o seu Discord?</label>
                  <input id='discord' type="text" placeholder='Usuário#0000' />
                </div>
              </div>

              <div>
                <div>
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                </div>

                <div>
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div>
                    <input id='hourStart'type="time" placeholder='De' />
                    <input id='hourEnd'type="time" placeholder='Até' />
                  </div>
                </div>
              </div>

              <div>
                <input type="checkbox" />
                Costumo me conectar ao chat de voz
              </div>

              <footer>
                <button>Cancelar</button>
                <button type="submit">
                  <GameController/>
                  Encontrar Duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
   </div>
  )
}

export default App
