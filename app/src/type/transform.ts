import {point} from "./point"
import {vector} from "./vector"

export type transform ={
    rotate?: rotate;
    translate?: translate;
    scale?: number;
}
export type rotate={
    center: point;
    angle: number;
}
export type translate={
    vector: vector;
}
export type scale={
    center: point;
    scaleX?: number;
    scaleY?: number;
}