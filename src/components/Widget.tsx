import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';

// Para acessibilidade e já vem com funcionalidades
import { Popover } from '@headlessui/react'

import { WidgetForm } from './WidgetForm';


// Sempre que precisamos q algo mude de acordo com alguma ação do usuário no react 
// Utilizamos o conceito de ESTADO


export function Widget(){
    // O PopOver por já esta integrado com o react, ele já controla o estado de aberto e fechado

    // const [ isWidgetOpen, setIsWidgetOpen ] = useState(false)

    // function toggleWidgetVisibility(){
    //     setIsWidgetOpen(!isWidgetOpen)
    // }

    return (

        <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
            {/* { isWidgetOpen ? <p>Hello Word</p> : null } */}

            {/* Popover.Panel é o conteudo do popover que vai abrir e fechar */}
            <Popover.Panel> 
                <WidgetForm/> 
            </Popover.Panel>

            <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className='w-6 h-6'/>

                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </Popover.Button>

        </Popover>
    )
}