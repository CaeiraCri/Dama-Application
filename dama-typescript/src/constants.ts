export const letterAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const numberAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];

export interface Piece {
    image: string;
    x: number;
    y: number;
    state: number; // 1 pedina, 2 dama
    type: PieceType;
    setState(value: number):void
}

export enum PieceType {
    ALLY = 1,
    ENEMY = -1,
}