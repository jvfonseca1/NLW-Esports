import * as Select from '@radix-ui/react-select';
import { useEffect, useState } from 'react';

// Tipagem Game
interface Game {
    id: string;
    title: string;
}

export function SelectGame (){
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
    )
}