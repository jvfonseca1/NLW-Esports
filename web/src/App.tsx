import { useState, useEffect } from 'react';

import './styles/main.css';

import * as Dialog from '@radix-ui/react-dialog'

import logoImg from './assets/logo-nlw.svg';
import { GameBanner } from './components/GameBanner/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner/CreateAdBanner';
import { GameController } from 'phosphor-react';
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
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui!
      </h1>

      {/* Grid de Jogos */}
      <div id='games-grid' className='grid grid-cols-6 gap-6 mt-16'>
      {games.map(game => {
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
      
      {/* Postagens de Anúncios */}
      <Dialog.Root>
            <CreateAdBanner/>

            <Dialog.Portal>
              <Dialog.Overlay className="bg-black/60 inset-0 fixed">

                <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
                  <Dialog.Title className="text-3xl font-black">Publicar um anúncio</Dialog.Title>

                    <form className="mt-8 flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="game" className="font-semibold">Qual o game?</label>
                          <Input id="game" placeholder="Selecione o game que deseja jogar" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="name">Qual nome (ou nickname)</label>
                          <Input id="name" placeholder="Como te chamam  dentro do game?" />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="flex flex-col gap-2">
                            <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                            <Input id="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <label htmlFor="discord">Qual seu Discord?</label>
                            <Input id="discord" placeholder="Usuario#0000" />
                          </div>
                        </div>
                        <div className="flex gap-6">
                          <div className="flex flex-col gap-2">
                            <label htmlFor="weekDays">Quando costuma jogar?</label>

                              <div className="grid grid-cols-5 gap-1">
                                <button 
                                  title="Domingo"
                                  className="w- h-9 rounded bg-zinc-900"  
                                >
                                  D
                                </button>
                                  
                                <button 
                                  title="Segunda"
                                  className="w- h-9 rounded bg-zinc-900"  
                                >
                                  S
                                </button>
                                  
                                <button 
                                  title="Terça"
                                  className="w- h-9 rounded bg-zinc-900"  
                                >
                                  T
                                </button>
                                  
                                <button 
                                  title="Quarta"
                                  className="w- h-9 rounded bg-zinc-900"  
                                >
                                  Q
                                </button>
                                  
                                <button 
                                  title="Quinta"
                                  className="w- h-9 rounded bg-zinc-900"  
                                >
                                  Q
                                </button>
                                  
                                <button 
                                  title="Sexta"
                                  className="w- h-9 rounded bg-zinc-900"  
                                >
                                  S
                                </button>
                                  
                                <button 
                                  title="Sábado"
                                  className="w- h-9 rounded bg-zinc-900"  
                                >
                                  S
                                </button>
                                  
                              </div>
                          </div>
                          <div className="flex flex-col gap-2 flex-1">
                            <label htmlFor="HourStart">Qual horário do dia?</label>
                            <div className="grid grid-cols-2 gap-2">
                              <Input id="HourStart" type="time" placeholder="De" />
                              <Input id="HourEnd" type="time" placeholder="Até" />
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 flex gap-2 text-sm">
                          <Input type="checkbox" />
                          Costumo me conectar ao chat de voz
                        </div>

                        <footer className="mt-4 flex justify-end gap-4">
                          <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">Cancelar</Dialog.Close>
                          <button 
                          className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                          type="submit">
                            <GameController className="w-6 h-6"/>
                            Encontrar duo
                          </button>
                        </footer>
                    </form>

                </Dialog.Content>
              </Dialog.Overlay>

            </Dialog.Portal>
          </Dialog.Root>
    </div>
  )
}

export default App
