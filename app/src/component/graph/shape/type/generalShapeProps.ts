import {viewbox} from "../../../../type/viewbox"
import {transform} from "../../../../type/transform"
import {point} from "../../../../type/point"

export type generalShapeProps = {
    viewbox: viewbox;
    center: point;
    transform?: transform;
    
    backgroundColor:string;
    strokeColor:string;
    strokeWidth:number;
}