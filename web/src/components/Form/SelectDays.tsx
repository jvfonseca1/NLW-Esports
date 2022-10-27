import * as ToggleGroup from '@radix-ui/react-toggle-group';

import { useState } from 'react';

export function SelectDays() {
    const [weekDays, setWeekDays] = useState<string[]>([])

    console.log(weekDays)
    
    return (
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
    )
}