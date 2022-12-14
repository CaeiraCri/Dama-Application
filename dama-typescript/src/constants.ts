import * as INTERFACES from './Interfaces'

export const VERTICAL_AXIS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const HORIZONTAL_AXIS = ['1', '2', '3', '4', '5', '6', '7', '8'];
export const GRID_SIZE = 100; 
export const BOARD_SIZE = 800; 
export const OFFSET_ADJUST = 25; 
export const BOARD_ADJUST = 75; 

export function isSamePosition(firstPosition: INTERFACES.Position, secondPosition: INTERFACES.Position) {
    return firstPosition.x === secondPosition.x && firstPosition.y === secondPosition.y;
}


export const initialBoardState: INTERFACES.Piece[] = [

    //ALLY PAWNS 

    {
        image: './assets/ally-pawn.png',
        position: {
            x: 0,
            y: 2   
        },
        state: 1,
        type: INTERFACES.PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 2,
            y: 2
        },
        state: 1,
        type: INTERFACES.PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 4,
            y: 2
        },
        state: 1,
        type: INTERFACES.PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 6,
            y: 2
        },   
        state: 1,
        type: INTERFACES.PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 1,
            y: 1
        },
        state: 1,
        type: INTERFACES.PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 3,
            y: 1
        },
        state: 1,
        type: INTERFACES.PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 5,
            y: 1
        },
        state: 1,
        type: INTERFACES.PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 7,
            y: 1
        },
        state: 1,
        type: INTERFACES.PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 0,
            y: 0
        },
        state: 1,
        type: INTERFACES.PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 2,
            y: 0
        },
        state: 1,
        type: INTERFACES.PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 4,
            y: 0
        },
        state: 1,
        type: INTERFACES.PieceType.ALLY,
        setState(value) { this.state = value }
    },
    {
        image: './assets/ally-pawn.png',
        position: {
            x: 6,
            y: 0
        },
        state: 1,
        type: INTERFACES.PieceType.ALLY,
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
        type: INTERFACES.PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 3, 
            y: 7
        },
        state: 1,
        type: INTERFACES.PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 5, 
            y: 7
        },
        state: 1,
        type: INTERFACES.PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 7, 
            y: 7
        },
        state: 1,
        type: INTERFACES.PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 0, 
            y: 6
        },
        state: 1,
        type: INTERFACES.PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 2, 
            y: 6
        },
        state: 1,
        type: INTERFACES.PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 4, 
            y: 6 
        },
        state: 1,
        type: INTERFACES.PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 6, 
            y: 6 
        },
        state: 1,
        type: INTERFACES.PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 1, 
            y: 5 
        },
        state: 1,
        type: INTERFACES.PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 3, 
            y: 5
        },
        state: 1,
        type: INTERFACES.PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 5, 
            y: 5 
        },
        state: 1,
        type: INTERFACES.PieceType.ENEMY, 
        setState(value) { this.state = value }
    },
    {
        image: './assets/enemy-pawn.png', 
        position: {
            x: 7, 
            y: 5
        },
        state: 1,
        type: INTERFACES.PieceType.ENEMY, 
        setState(value) { this.state = value }
    }

];