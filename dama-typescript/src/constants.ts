export const VERTICAL_AXIS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const HORIZONTAL_AXIS = ['1', '2', '3', '4', '5', '6', '7', '8'];
export const GRID_SIZE = 100; 

export function isSamePosition(firstPosition: Position, secondPosition: Position) {
    return firstPosition.x === secondPosition.x && firstPosition.y === secondPosition.y;
}

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
    setState(value: number):void
}

export const initialBoardState: Piece[] = [

    //ALLY PAWNS 

    {
        image: './assets/ally-pawn.png',
        position: {
            x: 0,
            y: 2   
        },
        state: 1,
        type: PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 2,
            y: 2
        },
        state: 1,
        type: PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 4,
            y: 2
        },
        state: 1,
        type: PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 6,
            y: 2
        },   
        state: 1,
        type: PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 1,
            y: 1
        },
        state: 1,
        type: PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 3,
            y: 1
        },
        state: 1,
        type: PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 5,
            y: 1
        },
        state: 1,
        type: PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 7,
            y: 1
        },
        state: 1,
        type: PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 0,
            y: 0
        },
        state: 1,
        type: PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 2,
            y: 0
        },
        state: 1,
        type: PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 4,
            y: 0
        },
        state: 1,
        type: PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 6,
            y: 0
        },
        state: 1,
        type: PieceType.ALLY,
        setState(value) { this.state = value }
    },

    //ENEMY PAWNS

    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 1, 
            y: 7
        },
        state: 1,
        type: PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 3, 
            y: 7
        },
        state: 1,
        type: PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 5, 
            y: 7
        },
        state: 1,
        type: PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 7, 
            y: 7
        },
        state: 1,
        type: PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 0, 
            y: 6
        },
        state: 1,
        type: PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 2, 
            y: 6
        },
        state: 1,
        type: PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 4, 
            y: 6 
        },
        state: 1,
        type: PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 6, 
            y: 6 
        },
        state: 1,
        type: PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 1, 
            y: 5 
        },
        state: 1,
        type: PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 3, 
            y: 5
        },
        state: 1,
        type: PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 5, 
            y: 5 
        },
        state: 1,
        type: PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 7, 
            y: 5
        },
        state: 1,
        type: PieceType.ENEMY, 
        setState(value) { this.state = value }
    }

];