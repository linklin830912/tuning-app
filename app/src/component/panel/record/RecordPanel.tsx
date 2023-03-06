import React, { useState, useEffect } from  'react';
import {RecordToggle} from '../../button/record/RecordToggle'
import { initAudioContext } from '../../../utils/audio/audioContext';

export const RecordPanel = ()=>{
    
    const audioContext = initAudioContext();

    return (
        <>
            <div>
                <RecordToggle audioContext={audioContext}/>
                <button >Play</button>
                <button >Save</button>
                <button >Delete</button>
            </div>
        </>
    );
} 