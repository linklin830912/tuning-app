import React, {useState, useEffect} from 'react';
import { getFft, getPitchAndClarity } from '../../../utils/audio/audioContext';

type RecordToggleProps = {
    audioContext: AudioContext
}
export const RecordToggle = (props: RecordToggleProps)=>{
    
    const [isRecording, setIsRecording] = useState<boolean>(false);
    const [fft, setFft] = useState<number[]>([]);
    const [mainHertz, setMainHertz] = useState<number>(0);
    const [pitch, setPitch] = useState<number>(0);
    const [clarity, setClarity] = useState<number>(0);

    useEffect(()=>{
        getFft(isRecording, (x, y)=>{
            setFft(x);
            setMainHertz(y);
        });
        getPitchAndClarity(isRecording, (x,y)=>{
            setPitch(x);
            setClarity(y);
        });
        if(isRecording){
            if( props.audioContext.state !=='running'){
                props.audioContext.resume();
            }
        }else if (props.audioContext.state ==='running'){
            props.audioContext.suspend();
        }
    },[isRecording])

    return(
        <>
        <button onClick={()=>{
                setIsRecording(!isRecording);
            }}>Record</button>
            <div>{pitch}</div>
            <div style={{
                display: 'flex',
            }}>
                {fft.map((x, index)=>(
                <>
                <div key={index}>
                {index}
                <div style={{
                        width:'20px',
                        height:`${x/10}px`,
                        backgroundColor:'pink',
                }}></div>
                <div style={{
                    fontSize: '1px',
                    color:'red',
                }}>{x}</div>
                </div>
                </>
                ))}
            </div>
            <div>{isRecording? "recording": "pause"}</div>
        </>
    );
}