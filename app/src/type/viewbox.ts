import { point } from './point'
export type viewbox = {
    x0:number;
    y0:number;
    x1:number;
    y1:number;
}
export function covertViewBoxToSVGString(viewBox:viewbox):string {
    return `${viewBox.x0} ${viewBox.y0} ${viewBox.x1} ${viewBox.y1}`
}
export function createViewBoxByCenterAndSize(width:number, height:number,center:point):viewbox{
    return {
        x0:center.x-width*0.5,
        y0:center.y-height*0.5,
        x1:center.x+width*0.5,
        y1:center.y+height*0.5,
    }
}