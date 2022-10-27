import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';


import { Check, GameController } from "phosphor-react";
import { Input } from "./Form/Input";
import { SelectGame } from './Form/SelectGame';
import { SelectDays } from './Form/SelectDays';


export function CreateAdModal() {
    return(
        <Dialog.Portal>
        <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

        <Dialog.Content 
        className='fixed bg-[#2A2634] py-8 px-10 w-[510px] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25'
        >
        <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

        <form className='mt-8 flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
                <label className='font-semibold' htmlFor='game'>Qual o game?</label>

               <SelectGame />
            </div>

            <div className='flex flex-col gap-2'>
            <label htmlFor="name">Seu nome (ou Nickname)</label>
            <Input id='name' type="text" placeholder='Como te chamam dentro do game?' />
            </div>

            <div className='grid grid-cols-2 gap-6'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="yearsPlaying" >Joga há quantos anos?</label>
                    <Input id='yearsPlaying' type="number" placeholder='Tudo bem ser ZERO' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="discord">Qual o seu Discord?</label>
                    <Input id='discord' type="text" placeholder='Usuário#0000' />
                </div>
            </div>

            <div className='flex flex-row gap-6'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="weekDays">Quando costuma jogar?</label>

                    <SelectDays />
                </div>

                <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor="hourStart">Qual horário do dia?</label>
                    <div className='grid grid-cols-2 gap-2'>
                    <Input id='hourStart'type="time" placeholder='De' />
                    <Input id='hourEnd'type="time" placeholder='Até' />
                    </div>
                </div>
            </div>

            <label className='mt-2 flex gap-2 text-sm items-center'>
            <Checkbox.Root className='w-6 h-6 p-1 rounded bg-zinc-900'>
                <Checkbox.Indicator >
                    <Check className='w-4 h-4 text-emerald-400 '/>
                </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
            </label>

            <footer className='mt-4 flex gap-2 justify-end'>
            <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
            <button 
                type="submit"
                className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'
            >
                <GameController size={24}/>
                Encontrar Duo
            </button>
            </footer>
        </form>
        </Dialog.Content>
    </Dialog.Portal>
  )  
}