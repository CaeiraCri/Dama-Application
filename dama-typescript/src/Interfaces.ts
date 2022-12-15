export interface Position {
    x: number;
    y: number;
} 

export enum PieceType {
    ALLY = 1,
    ENEMY = -1,
}

export interface Piece {
    image: string;
    position: Position;
    state: number; // 1 pedina, 2 dama
    type: PieceType;
    setState(value: number): void;
    setImage(value: string): void;
}