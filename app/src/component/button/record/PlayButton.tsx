import react from 'react';

type PlayButtonProps = {
    audioContext: AudioContext;
}
export const PlayButton = (props:PlayButtonProps)=>{
    return (
        <>
            <button>play</button>
        </>
    );
}