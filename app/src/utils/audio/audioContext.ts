import React from "react";
import { PitchDetector } from 'pitchy';


const audioContext : AudioContext = new AudioContext();
const analyserNode : AnalyserNode = new AnalyserNode(audioContext, {fftSize:1024});
const hertzStep : number = (audioContext.sampleRate*0.5)/analyserNode.fftSize;

const detector = PitchDetector.forFloat32Array(analyserNode.fftSize);
const input = new Float32Array(detector.inputLength);

export const initAudioContext = ()=>{
    setupAudioContext();
    console.log("!!!audioContext.sampleRate",audioContext.sampleRate)
    return audioContext;
}
const setupAudioContext = async ()=>{     
    const stream = await getStream();
    const source = audioContext.createMediaStreamSource(stream);
    source.connect(analyserNode)
        // .connect(audioContext.destination)

    
}


const getStream = ()=>{
    return navigator.mediaDevices.getUserMedia({
      audio:{
        echoCancellation: true,
        autoGainControl: true,
        noiseSuppression: true,
        latency: 0
      }
    })
  }

let requestFftId : number = 0;
let requestPCId: number = 0;

export const getFft = (isRecording:boolean, onChange:(x: number[], y:number)=>void)=>{
  
  const stopRecording = ()=>{
    window.cancelAnimationFrame(requestFftId)
  }

  const getFrequency = () => {
    requestFftId = window.requestAnimationFrame(getFrequency);
   
    const bufferLength = analyserNode.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyserNode.getByteFrequencyData(dataArray);
    const result =  Array.from(dataArray)
    const maxStrength = result.reduce(
      (a, b)=>{return a>b? a:b}, result[0]
    )
    onChange(result, result.indexOf(maxStrength)*hertzStep);
    return dataArray[0];
  }

  if(isRecording){
    getFrequency();
  }else{
    stopRecording();
  }
}

export const getPitchAndClarity = (isRecording:boolean, onChange:(pitch:number, clarity:number)=>void) => {
  const stopRecording = ()=>{
    window.cancelAnimationFrame(requestPCId)
  }
  const startRecording = ()=>{
    requestPCId = window.requestAnimationFrame(startRecording)
    analyserNode.getFloatTimeDomainData(input);
    const [pitch, clarity] = detector.findPitch(input, audioContext.sampleRate);
    onChange(pitch, clarity);
  }
  
  if(isRecording){
    startRecording();
  }else{
    stopRecording();
  }
  
}