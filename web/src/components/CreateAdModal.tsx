import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { Input } from "./Form/Input";

import { Check, GameController } from "phosphor-react";
import { FormEvent, useEffect, useState } from 'react';

// Tipagem Game
interface Game {
    id: string;
    title: string;
}

export function CreateAdModal() {
    // UseStates
    const [games, setGames] = useState<Game[]>([]);
    const [weekDays, setWeekDays] = useState<string[]>([]);
    const [useVoiceChannel, setUseVoiceChannel] = useState(false);

    //  Function Postagem Forms
    function handleCreateAd(event: FormEvent) {
        event.preventDefault();
        
        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);
        
        console.log(data);
        console.log(weekDays);
        console.log(useVoiceChannel);
    }

    // Conexão com a api Games
    useEffect(() => {
        fetch('http://localhost:8080/games')
            .then ((response) => response.json())
            .then ((data) => {
                setGames(data)
            })
    }, [])
    

    return(
        <Dialog.Portal>
            <Dialog.Overlay className='bg-black/60 inset-0 fixed'/>

            <Dialog.Content 
            className='fixed bg-[#2A2634] py-8 px-10 w-[510px] text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25'
            >
            <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

            <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <label className='font-semibold' htmlFor='game'>Qual o game?</label>

                    {/* Listagem Games */}
                    <Select.Root>
                        <Select.Trigger className="bg-zinc-900 py-3 px-4 rounded text-sm flex items-center justify-between text-zinc-500 ">
                            <Select.Value placeholder="Selecione o game que deseja jogar"/>
                            <Select.Icon />
                        </Select.Trigger>

                        <Select.Portal>
                            <Select.Content className='text-sm'>
                                <Select.ScrollUpButton/>
                                <Select.Viewport className='flex flex-col w-full rounded shadow bg-zinc-900'>
                            
                                { games.map(game => {
                                    return (
                                        <Select.Item key={game.id} className='cursor-default text-white w-full h-8 hover:bg-zinc-800 py-1 px-2' value ={game.id}>
                                            <Select.ItemText>{game.title}</Select.ItemText>
                                            <Select.ItemIndicator />
                                        </Select.Item>
                                    )
                                })}
                                </Select.Viewport>
                                <Select.ScrollDownButton/>
                            </Select.Content>
                        </Select.Portal>
                    </Select.Root>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="name">Seu nome (ou Nickname)</label>
                    <Input name='name' id='name' type="text" placeholder='Como te chamam dentro do game?' />
                </div>

                <div className='grid grid-cols-2 gap-6'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="yearsPlaying" >Joga há quantos anos?</label>
                        <Input name='yearsPlaying' id='yearsPlaying' type="number" placeholder='Tudo bem ser ZERO' />
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="discord">Qual o seu Discord?</label>
                        <Input name='discord' id='discord' type="text" placeholder='Usuário#0000' />
                    </div>
                </div>

                <div className='flex flex-row gap-6'>

                    {/* Seleção dias da semana */}
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="weekDays">Quando costuma jogar?</label>
                        <ToggleGroup.Root 
                            className='grid grid-cols-5 gap-2' 
                            type="multiple"
                            value={weekDays}
                            onValueChange={setWeekDays}
                        >            
                            <ToggleGroup.Item 
                                value="0" 
                                title='Segunda'
                                className={`w-8 h-8 rounded ${weekDays.includes("0") ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            >
                            S
                            </ToggleGroup.Item>
                            <ToggleGroup.Item 
                                value="1"                    
                                title='Terça'
                                className={`w-8 h-8 rounded ${weekDays.includes("1") ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            >
                            T
                            </ToggleGroup.Item>
                            <ToggleGroup.Item 
                                value="2"
                                title='Quarta'
                                className={`w-8 h-8 rounded ${weekDays.includes("2") ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            >
                            Q
                            </ToggleGroup.Item>
                            <ToggleGroup.Item 
                                value="3"
                                title='Quinta'
                                className={`w-8 h-8 rounded ${weekDays.includes("3") ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            >
                            Q
                            </ToggleGroup.Item>
                            <ToggleGroup.Item 
                                value="4"                    
                                title='Sexta'
                                className={`w-8 h-8 rounded ${weekDays.includes("4") ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            >
                            S
                            </ToggleGroup.Item>
                            <ToggleGroup.Item 
                                value="5"
                                title='Sabado'
                                className={`w-8 h-8 rounded ${weekDays.includes("5") ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            >
                            S
                            </ToggleGroup.Item>
                            <ToggleGroup.Item 
                                value="6" 
                                title='Domingo'
                                className={`w-8 h-8 rounded ${weekDays.includes("6") ? 'bg-violet-500' : 'bg-zinc-900'}`}
                            >
                            D
                            </ToggleGroup.Item>
                        </ToggleGroup.Root>
                    </div>

                    <div className='flex flex-col gap-2 flex-1'>
                        <label htmlFor="hourStart">Qual horário do dia?</label>
                        <div className='grid grid-cols-2 gap-2'>
                        <Input name='hourStart' id='hourStart' type="time" placeholder='De' />
                        <Input name='hourEnd' id='hourEnd' type="time" placeholder='Até' />
                        </div>
                    </div>
                </div>

                {/* Checkbox Voice Channel */}
                <label className='mt-2 flex gap-2 text-sm items-center'>
                <Checkbox.Root 
                    checked={useVoiceChannel}
                    onCheckedChange={(checked) => {
                        if (checked === true) {
                            setUseVoiceChannel(true)
                        } else {
                            setUseVoiceChannel(false)
                        }
                    }}
                    className='w-6 h-6 p-1 rounded bg-zinc-900'
                >
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