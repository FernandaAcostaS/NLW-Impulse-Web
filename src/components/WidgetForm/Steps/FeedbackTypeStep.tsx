import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps { //component recebe uma interface como propriedade
    onFeedbackTypeChanged: (type: FeedbackType) => void; //funçã recebe o tipo do feedback e nao tem retorno, void
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps ) {
    return (
        <>
            <header>
                <span className="text-xl leading-6"> Deixe seu feedback</span>
                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full"> 
                { Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-w border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                            onClick={() => props.onFeedbackTypeChanged(key as FeedbackType)}
                            type="button"
                        >
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    );
                }) 
                }
            </div>
        </>
    )
}