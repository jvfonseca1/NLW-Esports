import './styles/main.css';

import logoimg from './assets/logo-nlw.svg';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoimg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.
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
            <strong className='font-bold text-white block'>Counter Strike</strong>
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
      <div className='bg-[#2A2634] px-8 py-6 mt-8 self-stretch rounded-lg '>

      </div>

    </div>
  )
}

export default App
