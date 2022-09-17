import { MagnifyingGlassPlus } from "phosphor-react";

export function CreatAddBanner(){
    return(
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
    )
}