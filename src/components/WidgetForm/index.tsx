import { CloseButton } from '../CloseButtom';

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from 'react';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';


export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
};

export type FeedbackType = keyof typeof feedbackTypes;

// Object.entries(feedbackTypes) => 
/* [ 
        ["BUG", {conteudo do objeto}], 
        ["IDEA", {conteudo do objeto}], 
        ["OTHER", {conteudo do objeto}], 
    ]
*/ 


export function WidgetForm(){

    const [ feedbackType, setFeedbackType ] = useState<FeedbackType | null> (null)

    // Para o FeedbackContentStep avisar para o Widget q finalizou o feedback
    const [ feedbackSent, setFeedbackSent ] = useState(false)

    function handleRestartFeedback(){
        setFeedbackType(null)
        setFeedbackSent(false)
    }

    return(
        // w-[calc(100vw-2rem)] md:w-auto PARA RESPONSIVIDADE
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg 
                        w-[calc(100vw-2rem)] md:w-auto">

            { feedbackSent ? (
                <FeedbackSuccessStep 
                onFeedbackRestartRequested={handleRestartFeedback}
                />
            ) : (
                <>
                    {/* Fluxo para selecionar o tipo de feedback */}
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType} 
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}


            <footer className="text-xs text-neutral-400">
                Feito por Arthur 😎 
            </footer>
        </div>
    )
}