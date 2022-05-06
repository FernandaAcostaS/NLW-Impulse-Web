import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";


export const feedbackTypes = { //objeto quue guarda todos os tipos de feedback da nossa aplicação
    BUG: { //ID do tipo de feedback, para eu internamente saber qual o feedback que a pessoa seleciomou
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA : {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'Imagem de um lâmpada'
        },
    },
    OTHER : {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

/**
 *  Object.entries(feedbackTypes)  => 
 * retorna um array de arrays acessando como um vetor e percorrrer esse vetor, e cada item do vetor tenho acesso a propriedade, chave e conteudo dessa posição do vetor
 * [
 *   ['BUG', {...}],
 *   ['IDEA', {...}],
 *   ['THOUGHT', {...}]
 * ]
 * //map percorrer um vetor e retornar alguma coisa dali de dentro
 * o item é o o array de duas possiçoes, se eu desestruturar posso passar a chave e o array
 * key={key} serve ´para fazer uma ordem e o botão simboliza aquele item 
 * 
 * State= para salvar as informações é utilizando o state, que armazena informaçãoe no componente e faz alterações coom essas informçaoes
 *                             onClick={() => setFeedbackType(key)} cria uma funcçao para iniciar o onclick
 */

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl  nb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            { feedbackSent ? (
                <FeedbackSucessStep onFeedbackRestartRequest={handleRestartFeedback} />
            ) : (
                <>
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
                Feito com ♥ pela <a className="underline underline-offset-2" href="http://www.rocketseat.com.br"> Rocketseat</a>
            </footer>

        </div>
    );
}



