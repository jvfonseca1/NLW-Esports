import * as Select from '@radix-ui/react-select';

export function SelectGame (){
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
                <Select.Item className='cursor-default text-white w-full h-8 hover:bg-zinc-800 py-1 px-2' value ="League of Legends">
                    <Select.ItemText>League of Legends</Select.ItemText>
                    <Select.ItemIndicator />
                </Select.Item>

                <Select.Item className='cursor-default text-white min-w-full h-8 hover:bg-zinc-800 py-1 px-2' value="CS: GO">
                    <Select.ItemText>CS: GO</Select.ItemText>
                    <Select.ItemIndicator />
                </Select.Item>

                <Select.Item className='cursor-default text-white min-w-full h-8 hover:bg-zinc-800 py-1 px-2' value="Call of Duty: Warzone">
                    <Select.ItemText>Call of Duty: Warzone</Select.ItemText>
                    <Select.ItemIndicator />
                </Select.Item>

                <Select.Item className='cursor-default text-white min-w-full h-8 hover:bg-zinc-800 py-1 px-2' value="GTA V">
                    <Select.ItemText>GTA V</Select.ItemText>
                    <Select.ItemIndicator />
                </Select.Item>

                <Select.Item className='cursor-default text-white min-w-full h-8 hover:bg-zinc-800 py-1 px-2' value="Rainbow Six Siege">
                    <Select.ItemText>Rainbow Six Siege</Select.ItemText>
                    <Select.ItemIndicator />
                </Select.Item>
                </Select.Viewport>
                <Select.ScrollDownButton/>
            </Select.Content>
        </Select.Portal>
    </Select.Root>
    )
}