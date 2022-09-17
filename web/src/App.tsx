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
      <div className='grid grid-cols-6 gap-6 mt-16'>
        
        {games.map(game => {
          return(
            <GameBanner 
              key={game.id}
              bannerUrl= {game.bannerURL}
              title= {game.title}
              adsCount={game._count.ads}
            />
          )
        })}

      </div>
      
      {/* Postagem de Anúncios */}
      <CreateAdBanner/>

    </div>
  )
}

export default App
