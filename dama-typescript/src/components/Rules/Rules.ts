import { PieceType, Piece } from "../../constants";

export default class Rules {
    moveIsValid(previousX: number, previousY: number, mouseX: number, mouseY: number, type:PieceType, boardState: Piece[], target: HTMLElement):Boolean {
        if(mouseY === previousY + type && target.classList.contains('black')) {
            if(target.dataset.empty === 'true') {
                return true;
            }
        }
        
        if(mouseY === previousY + type * 2 && target.classList.contains('black')) {
            if(target.dataset.empty === 'true' && this.getPieceType(previousX, previousY, mouseX, type, boardState)) {
                return true;
            }
        }
        return false;
    }

    getPieceType(x: number, y: number, mouseX: number, type: number, boardState: Piece[]) {
        const newY = y + type;
        const newX = (x + mouseX) / 2;
        const piece: Piece | undefined = boardState.find(p => p.y === newY && p.x === newX);
        console.log(boardState)
        if(piece) {
            console.log(piece)
            if(piece.type !== type)  {
                boardState.splice(boardState.indexOf(piece), 1)
                console.log(boardState)
                return true;
            }
        }
        return false;
    }
}