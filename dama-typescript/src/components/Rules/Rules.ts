import { PieceType, Piece, Position } from "../../Interfaces";
import * as CONSTANTS from '../../constants';   

export default class Rules {
    moveIsValid(previousPosition: Position, mousePosition: Position, type:PieceType, piece: Piece,boardState: Piece[], target: HTMLElement):Boolean {
        
        //  MOVE CHECKER
        if(mousePosition.y === previousPosition.y + piece.type && this.isBlackTile(target)) {
            if(this.isEmpty(mousePosition, boardState)) {
                return true;
            }
        }

        //  ATTACK CHECKER
        if(mousePosition.y === previousPosition.y + piece.type * 2 && this.isBlackTile(target)) {
            if(this.isEmpty(mousePosition, boardState) && this.checkEatenPawn(previousPosition, mousePosition, type, piece, boardState)) {
                return true;
            }
        }
        //  DAMA LOGIC CHECKER
        if(piece.state == CONSTANTS.DAMA_STATE) {
            if((mousePosition.y === previousPosition.y - piece.type || mousePosition.y === previousPosition.y - piece.type) && this.isBlackTile(target)) {
                return true;
            }
            if(this.isEmpty(mousePosition, boardState) && this.checkEatenPawn(previousPosition, mousePosition, type, piece, boardState)) {
                return true;
            }
        }
        return false;
    }

    isBlackTile(target: HTMLElement) {
        if(target.classList.contains('black')) { return true }
        return false;
    }

    isEmpty(mousePosition: Position, boardState: Piece[]) {
        const piece: Piece | undefined = boardState.find(piecesIterator => piecesIterator.position.y === mousePosition.y && piecesIterator.position.x === mousePosition.x);

        if(piece) { return false}
        return true;
    }

    checkEatenPawn(previousPosition: Position, mousePosition: Position, type: number, piece: Piece, boardState: Piece[]) {
        let eatenPawnY = 0;
        let eatenPawnX = 0;

        if(piece.state === CONSTANTS.DAMA_STATE && previousPosition.y === mousePosition.y - piece.type * 2) {
            eatenPawnY = previousPosition.y + piece.type;
            eatenPawnX = (previousPosition.x + mousePosition.x) / 2;
        } else if(piece.state === CONSTANTS.DAMA_STATE && previousPosition.y === mousePosition.y + piece.type * 2) {
            eatenPawnY = previousPosition.y - piece.type;
            eatenPawnX = (previousPosition.x + mousePosition.x) / 2;
        }else {
            eatenPawnY = previousPosition.y + piece.type; 
            eatenPawnX = (previousPosition.x + mousePosition.x) / 2;
        }
        const currentPiece: Piece | undefined = boardState.find(piecesIterator => piecesIterator.position.y === eatenPawnY && piecesIterator.position.x === eatenPawnX);
        if(currentPiece) {
            this.removeEatenPawn(type, currentPiece, boardState);
            return true;
        }
        return false;
    }

    removeEatenPawn(type: number, piece: Piece, boardState: Piece[] ) {
        if(piece.type !== type)  {
            boardState.splice(boardState.indexOf(piece), 1)
            return
        }
    }

}