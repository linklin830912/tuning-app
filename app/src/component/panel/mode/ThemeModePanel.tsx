import React, {useState} from 'react';
import { SwitchButton } from "../../button/general/SwitchButton"
import { ColorPicker } from '../../input/color/ColorPicker';

export const ThemeModePanel = ()=>{
    const [theme, setTheme] = useState<string>('red');
    return (
        <>
            <div>                
                <SwitchButton onChange={(x)=>{setTheme(x?"red":"blue")}}/>
                <div>advance</div>
                <ColorPicker/>
            </div>
        </>
    );
}