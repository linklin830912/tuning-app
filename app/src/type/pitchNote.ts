import {notationType} from "../enum/notationType"

export type pitchNote = {
    frequency: number;
    note: string;
    interval: number;
    notation: notationType; 
}