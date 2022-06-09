import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Loading } from '../Loading';

// Função como propriedade q será enviada para o componente
interface ScreenshotButtonProps {
    screenshot: string | null; 
    onScreenshotTook: (screenshot: string | null) => void;
}


export function ScreenshotButton({ 
    screenshot, 
    onScreenshotTook 
}: ScreenshotButtonProps ){

    const [ isTakingScreenshot, setIsTakingScreenshot ] = useState(false)


    // Tirar screenshot(usa biblioteca html2canvas)
    async function handlerTakeScreenshot(){
        setIsTakingScreenshot(true)

        // Como parâmetro passa qual elemento do html quero tirar foto / Esse ponto de exclamação é para forçar e dizer q nunca vai ser nulo
        const canvas = await html2canvas(document.querySelector('html')!)
        // Converter para o formatado PNG no formato base64 (formato de texto q representa uma imagem)
        const base64image = canvas.toDataURL('image/png'); 

        onScreenshotTook(base64image);

        setIsTakingScreenshot(false)
    }

    if(screenshot){
        return(
            <button
                type="button"
                className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors'
                onClick={() => onScreenshotTook(null)}
                style={{
                    backgroundImage: `url(${screenshot})`,
                    //Apenas para ver q a foto foi tirada, já q a tela é preta
                    backgroundPosition: 'right bottom',
                    backgroundSize: 180,
                }}
            >
                <Trash weight='fill'/>
            </button>
        )
    }

    return(
        <button
            type="button"
            onClick={handlerTakeScreenshot}
            className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 '
        >
            { isTakingScreenshot ? <Loading/> : <Camera/> }
        </button>
    )
}