import './App.css';

// import { FunctionModePanel } from './component/panel/mode/FunctionModePanel';
// import { RecordPanel } from './component/panel/record/RecordPanel';
// import { IntervalPanel } from './component/panel/record/IntervalPanel';

import { FftGraphCollection } from './component/graph/FftGraphCollection';
import { PitchGraphCollection } from './component/graph/PitchGraphCollection';
import { pitchNoteType } from "./enum/pitchNoteType";
import { notationType } from "./enum/notationType";
import { pitchNote } from "./type/pitchNote";

import React from 'react';
import { useAppSelector, useAppDispatch } from "./app/hook"
import { createRecord, createAccount, createAnalysis, loginAccount } from "./feature/mode/functionModeSlice"
import { functionModeType } from './feature/mode/functionModeType';
import { WebFormat } from "./component/format/WebFormat"

function App(){
  const functionMode = useAppSelector((state)=>state.functionMode.mode);
  const dispatch =  useAppDispatch();
  
  return (
    <>   

        <WebFormat>
          {/* <FftGraphCollection href="tempCircle"/>
          <PitchGraphCollection/> */}
        </WebFormat>
        <input type="checkbox"/>
    
    </>
  );
}

export default App;

function getAllPitchNotes():pitchNote[] {
  const notes = Object.keys(pitchNoteType).filter(x =>!isNaN(Number(x)));
  let pitchNoteArray = Array<pitchNote>();
  notes.forEach((frequency)=>{
    let note = pitchNoteType[Number(frequency)];
    let result = note.split("_");
    let noteString = result[0][0];
    let notationNumber = Number(result[0][1]);
    let notation = getNotationType(notationNumber);
    let interval = Number(result[1]);

    pitchNoteArray.push({
      note: noteString,
      notation: notation,
      interval: interval,
      frequency: Number(frequency)
    })
  })

  return pitchNoteArray;
}

function getNotationType(notationNumber: number){
  switch (notationNumber){
    case 0:
      return notationType.flat;
    case 1:
      return notationType.neutral;
    default:
      return notationType.sharp;
  }

}
