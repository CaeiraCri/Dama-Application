import { PieceType, Piece, Position } from "../../constants";

export default class Rules {
    moveIsValid(previousPosition: Position, mousePosition: Position, type:PieceType, boardState: Piece[], target: HTMLElement):Boolean {
        
        //  MOVE CHECKER
        if(mousePosition.y === previousPosition.y + type && target.classList.contains('black')) {
            if(target.dataset.empty === 'true') {
                return true;
            }
        }

        //  ATTACK CHECKER
        if(mousePosition.y === previousPosition.y + type * 2 && target.classList.contains('black')) {
            if(target.dataset.empty === 'true' && this.checkEatenPawn(previousPosition, mousePosition.x, type, boardState)) {
                return true;
            }
        }
        return false;
    }

    checkEatenPawn(previousPosition: Position, mouseX: number, type: number, boardState: Piece[]) {
        const eatenPawnY = previousPosition.y + type;
        const eatenPawnX = (previousPosition.x + mouseX) / 2;
        const piece: Piece | undefined = boardState.find(piecesIterator => piecesIterator.position.y === eatenPawnY && piecesIterator.position.x === eatenPawnX);
        if(piece) {
            this.removeEatenPawn(type, piece, boardState);
            return true;
        }
        return false;
    }

    removeEatenPawn( type: number, piece: Piece, boardState: Piece[] ) {
        if(piece.type !== type)  {
            boardState.splice(boardState.indexOf(piece), 1)
            return
        }
    }
    
}